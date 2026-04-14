import { createContext, useContext, useReducer } from 'react'
import { STYLES, REASON_WEIGHTS } from '../data/styles'
import { CLOTHING_ITEMS } from '../data/categories'

const AppContext = createContext(null)

const SCREENS = {
  WELCOME: 'welcome',
  SEASONS: 'seasons',
  CATEGORIES: 'categories',
  DISCOVERY: 'discovery',
  RESULTS: 'results',
}

const initialState = {
  screen: SCREENS.WELCOME,
  selectedSeasons: [],
  selectedCategories: [],
  // queue of items to show during discovery
  itemQueue: [],
  currentItemIndex: 0,
  // { itemId: { liked: true, reasons: ['Bold colors', ...] } }
  responses: {},
  // style score accumulator
  styleScores: Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0])),
}

function buildItemQueue(categories, seasons) {
  const items = []
  for (const catId of categories) {
    const catItems = CLOTHING_ITEMS[catId] || []
    for (const item of catItems) {
      // include item if any selected season matches (or no season filter)
      if (seasons.length === 0 || item.seasons.some((s) => seasons.includes(s))) {
        items.push({ ...item, categoryId: catId })
      }
    }
  }
  return items
}

function addStyleWeights(scores, weights, multiplier = 1) {
  const next = { ...scores }
  for (const [style, weight] of Object.entries(weights)) {
    if (next[style] !== undefined) {
      next[style] += weight * multiplier
    }
  }
  return next
}

function reducer(state, action) {
  switch (action.type) {
    case 'GO_TO_SEASONS':
      return { ...state, screen: SCREENS.SEASONS }

    case 'SET_SEASONS':
      return { ...state, selectedSeasons: action.seasons }

    case 'GO_TO_CATEGORIES':
      return { ...state, screen: SCREENS.CATEGORIES }

    case 'SET_CATEGORIES':
      return { ...state, selectedCategories: action.categories }

    case 'START_DISCOVERY': {
      const queue = buildItemQueue(state.selectedCategories, state.selectedSeasons)
      return {
        ...state,
        screen: SCREENS.DISCOVERY,
        itemQueue: queue,
        currentItemIndex: 0,
        responses: {},
        styleScores: Object.fromEntries(Object.keys(STYLES).map((k) => [k, 0])),
      }
    }

    case 'SKIP_ITEM':
      // User doesn't like this item — move on
      if (state.currentItemIndex + 1 >= state.itemQueue.length) {
        return { ...state, screen: SCREENS.RESULTS }
      }
      return { ...state, currentItemIndex: state.currentItemIndex + 1 }

    case 'LIKE_ITEM_WITH_REASONS': {
      const { item, reasons } = action
      // Score: item's style weights + reasons weights
      let scores = addStyleWeights(state.styleScores, item.styleWeights, 1)
      for (const reason of reasons) {
        const rw = REASON_WEIGHTS[reason]
        if (rw) scores = addStyleWeights(scores, rw, 1)
      }
      const responses = {
        ...state.responses,
        [item.id]: { liked: true, reasons },
      }
      if (state.currentItemIndex + 1 >= state.itemQueue.length) {
        return { ...state, styleScores: scores, responses, screen: SCREENS.RESULTS }
      }
      return {
        ...state,
        styleScores: scores,
        responses,
        currentItemIndex: state.currentItemIndex + 1,
      }
    }

    case 'RESTART':
      return { ...initialState }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch, SCREENS }}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
