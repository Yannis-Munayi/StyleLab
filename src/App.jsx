import { AppProvider, useApp } from './context/AppContext'
import WelcomeScreen from './screens/WelcomeScreen'
import SeasonScreen from './screens/SeasonScreen'
import CategoryScreen from './screens/CategoryScreen'
import DiscoveryScreen from './screens/DiscoveryScreen'
import ResultsScreen from './screens/ResultsScreen'

function Router() {
  const { state, SCREENS } = useApp()

  switch (state.screen) {
    case SCREENS.WELCOME:    return <WelcomeScreen />
    case SCREENS.SEASONS:    return <SeasonScreen />
    case SCREENS.CATEGORIES: return <CategoryScreen />
    case SCREENS.DISCOVERY:  return <DiscoveryScreen />
    case SCREENS.RESULTS:    return <ResultsScreen />
    default:                 return <WelcomeScreen />
  }
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
