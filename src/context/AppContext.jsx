import { createContext, useContext, useEffect, useReducer } from 'react'
import { STYLES, REASON_WEIGHTS } from '../data/styles'
import { CLOTHING_ITEMS } from '../data/categories'
import { AESTHETIC_QUIZ_ITEMS } from '../data/aestheticItems'

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

// Returns true if an item's gender is compatible with the user's preference.
// Items without a gender field are treated as 'unisex'.
function matchesGender(itemGender, preference) {
  if (preference === 'both') return true
  const g = itemGender || 'unisex'
  return g === 'unisex' || g === preference
}

function buildItemQueue(categories, seasons, gender) {
  const catSet = new Set(categories)
  const items  = []

  for (const catId of categories) {
    for (const item of (CLOTHING_ITEMS[catId] || [])) {
      if (
        (seasons.length === 0 || item.seasons.some((s) => seasons.includes(s))) &&
        matchesGender(item.gender, gender)
      ) {
        items.push({ ...item, categoryId: catId })
      }
    }
  }

  for (const item of AESTHETIC_QUIZ_ITEMS) {
    if (
      catSet.has(item._category) &&
      (seasons.length === 0 || item.seasons.some((s) => seasons.includes(s))) &&
      matchesGender(item.gender, gender)
    ) {
      items.push({ ...item, categoryId: item._category })
    }
  }

  return items
}

// Recompute all style scores from scratch based on the responses map.
// This ensures going back and changing a choice always produces correct scores.
function recalculateScores(responses, itemQueue) {
  const scores = Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0]))
  for (const item of itemQueue) {
    const resp = responses[item.id]
    if (!resp?.liked) continue
    for (const [style, weight] of Object.entries(item.styleWeights)) {
      if (scores[style] !== undefined) scores[style] += weight
    }
    for (const reason of resp.reasons) {
      const rw = REASON_WEIGHTS[reason]
      if (!rw) continue
      for (const [style, weight] of Object.entries(rw)) {
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
      if (state.currentItemIndex === 0) {
        return { ...state, screen: SCREENS.CATEGORIES }
      }
      return { ...state, currentItemIndex: state.currentItemIndex - 1 }

    case 'SKIP_ITEM': {
      const responses = { ...state.responses, [state.itemQueue[state.currentItemIndex]?.id]: { liked: false, reasons: [] } }
      if (state.currentItemIndex + 1 >= state.itemQueue.length) {
        return { ...state, responses, screen: SCREENS.RESULTS }
      }
      return { ...state, responses, currentItemIndex: state.currentItemIndex + 1 }
    }

    case 'LIKE_ITEM_WITH_REASONS': {
      const { item, reasons } = action
      const responses = { ...state.responses, [item.id]: { liked: true, reasons } }
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

  // Persist gender preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fashionGender', state.gender)
  }, [state.gender])

  return <AppContext.Provider value={{ state, dispatch, SCREENS }}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
