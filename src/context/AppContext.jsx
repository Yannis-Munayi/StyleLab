import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { STYLES } from '../data/styles'
import { CLOTHING_ITEMS } from '../data/categories'
import { AESTHETIC_QUIZ_ITEMS } from '../data/aestheticItems'
import { LABEL_WEIGHTS, getItemLabels } from '../data/labels'

const AppContext = createContext(null)

export const SCREENS = {
  AUTH:       'auth',
  WELCOME:    'welcome',
  SEASONS:    'seasons',
  CATEGORIES: 'categories',
  DISCOVERY:  'discovery',
  RESULTS:    'results',
  PROFILE:    'profile',
}

const initialState = {
  screen: SCREENS.WELCOME,
  selectedSeasons: [],
  selectedCategories: [],
  itemQueue: [],
  currentItemIndex: 0,
  responses: {},
  styleScores: Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0])),
  gender: localStorage.getItem('fashionGender') ?? 'both', // 'men' | 'women' | 'both'
}

function matchesGender(itemGender, preference) {
  if (preference === 'both') return true
  const g = itemGender || 'unisex'
  return g === 'unisex' || g === preference
}

function buildItemQueue(categories, seasons, gender) {
  const catSet = new Set(categories)
  const all    = []

  for (const catId of categories) {
    for (const item of (CLOTHING_ITEMS[catId] || [])) {
      if (
        (seasons.length === 0 || item.seasons.some((s) => seasons.includes(s))) &&
        matchesGender(item.gender, gender)
      ) {
        all.push({ ...item, categoryId: catId })
      }
    }
  }

  for (const item of AESTHETIC_QUIZ_ITEMS) {
    if (
      catSet.has(item._category) &&
      (seasons.length === 0 || item.seasons.some((s) => seasons.includes(s))) &&
      matchesGender(item.gender, gender)
    ) {
      all.push({ ...item, categoryId: item._category })
    }
  }

  // Deduplicate by normalised name. Merge styleWeights across duplicates so
  // an item shared by multiple aesthetics still signals all of them in scoring.
  const seen = new Map()
  for (const item of all) {
    const key = item.name.toLowerCase().trim()
    if (!seen.has(key)) {
      seen.set(key, { ...item, styleWeights: { ...item.styleWeights } })
    } else {
      const kept = seen.get(key)
      for (const [style, w] of Object.entries(item.styleWeights || {})) {
        kept.styleWeights[style] = Math.max(kept.styleWeights[style] || 0, w)
      }
    }
  }

  return [...seen.values()]
}

// Recompute scores using item-embedded labels (no manual reason selection needed).
function recalculateScores(responses, itemQueue) {
  const scores = Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0]))
  for (const item of itemQueue) {
    const resp = responses[item.id]
    if (!resp?.liked) continue
    // Primary signal: item's aesthetic weights
    for (const [style, weight] of Object.entries(item.styleWeights || {})) {
      if (scores[style] !== undefined) scores[style] += weight
    }
    // Secondary signal: auto-inferred labels for the item
    for (const label of getItemLabels(item)) {
      const lw = LABEL_WEIGHTS[label]
      if (!lw) continue
      for (const [style, weight] of Object.entries(lw)) {
        if (scores[style] !== undefined) scores[style] += weight
      }
    }
  }
  return scores
}

function reducer(state, action) {
  switch (action.type) {
    case 'GO_TO_AUTH':
      return { ...state, screen: SCREENS.AUTH }

    case 'GO_TO_WELCOME':
      return { ...state, screen: SCREENS.WELCOME }

    case 'GO_TO_PROFILE':
      return { ...state, screen: SCREENS.PROFILE }

    case 'GO_TO_SEASONS':
      return { ...state, screen: SCREENS.SEASONS }

    case 'SET_SEASONS':
      return { ...state, selectedSeasons: action.seasons }

    case 'GO_TO_CATEGORIES':
      return { ...state, screen: SCREENS.CATEGORIES }

    case 'SET_CATEGORIES':
      return { ...state, selectedCategories: action.categories }

    case 'SET_GENDER':
      return { ...state, gender: action.gender }

    case 'START_DISCOVERY': {
      const queue = buildItemQueue(state.selectedCategories, state.selectedSeasons, state.gender)
      return {
        ...state,
        screen: SCREENS.DISCOVERY,
        itemQueue: queue,
        currentItemIndex: 0,
        responses: {},
        styleScores: Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0])),
      }
    }

    case 'PREV_ITEM':
      if (state.currentItemIndex === 0) return state
      return { ...state, currentItemIndex: state.currentItemIndex - 1 }

    case 'SKIP_ITEM': {
      const responses = { ...state.responses, [state.itemQueue[state.currentItemIndex]?.id]: { liked: false } }
      if (state.currentItemIndex + 1 >= state.itemQueue.length) {
        return { ...state, responses, screen: SCREENS.RESULTS }
      }
      return { ...state, responses, currentItemIndex: state.currentItemIndex + 1 }
    }

    case 'LIKE_ITEM': {
      const { item } = action
      const responses = { ...state.responses, [item.id]: { liked: true } }
      const styleScores = recalculateScores(responses, state.itemQueue)
      if (state.currentItemIndex + 1 >= state.itemQueue.length) {
        return { ...state, styleScores, responses, screen: SCREENS.RESULTS }
      }
      return { ...state, styleScores, responses, currentItemIndex: state.currentItemIndex + 1 }
    }

    case 'RESTART':
      return { ...initialState }

    case 'RESTART_QUIZ':
      return { ...initialState, screen: SCREENS.SEASONS }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('fashionGender', state.gender)
  }, [state.gender])

  return <AppContext.Provider value={{ state, dispatch, SCREENS }}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}

// ── Theme hook ────────────────────────────────────────────────────────────────
// Persisted in localStorage. Applies data-theme attribute to the document root.
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('stylelab_theme') ?? 'dark'
  })

  function setTheme(t) {
    localStorage.setItem('stylelab_theme', t)
    document.documentElement.setAttribute('data-theme', t)
    setThemeState(t)
  }

  // Apply on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { theme, setTheme }
}
