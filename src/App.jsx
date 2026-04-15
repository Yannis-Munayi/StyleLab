import { useState } from 'react'
import { AppProvider, useApp, SCREENS } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import WelcomeScreen    from './screens/WelcomeScreen'
import SeasonScreen     from './screens/SeasonScreen'
import CategoryScreen   from './screens/CategoryScreen'
import DiscoveryScreen  from './screens/DiscoveryScreen'
import ResultsScreen    from './screens/ResultsScreen'
import AuthScreen       from './screens/AuthScreen'
import ProfileScreen    from './screens/ProfileScreen'
import WardrobeScreen   from './screens/WardrobeScreen'
import TabBar           from './components/TabBar'

// Screens where the tab bar is hidden (focused quiz flow)
const HIDE_TABS_ON = new Set([
  SCREENS.AUTH,
  SCREENS.SEASONS,
  SCREENS.CATEGORIES,
  SCREENS.DISCOVERY,
])

function QuizRouter() {
  const { state } = useApp()

  switch (state.screen) {
    case SCREENS.AUTH:       return <AuthScreen />
    case SCREENS.WELCOME:    return <WelcomeScreen />
    case SCREENS.SEASONS:    return <SeasonScreen />
    case SCREENS.CATEGORIES: return <CategoryScreen />
    case SCREENS.DISCOVERY:  return <DiscoveryScreen />
    case SCREENS.RESULTS:    return <ResultsScreen />
    case SCREENS.PROFILE:    return <ProfileScreen />
    default:                 return <WelcomeScreen />
  }
}

function AppShell() {
  const { state } = useApp()
  const [activeTab, setActiveTab] = useState('quiz')

  const showTabs = !HIDE_TABS_ON.has(state.screen)

  return (
    <div style={{ paddingBottom: showTabs ? 64 : 0 }}>
      {!showTabs || activeTab === 'quiz'  ? <QuizRouter />     : null}
      {showTabs  && activeTab === 'wardrobe' ? <WardrobeScreen /> : null}
      {showTabs  && activeTab === 'profile'  ? <ProfileScreen onBack={() => setActiveTab('quiz')} /> : null}

      {showTabs && (
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </AuthProvider>
  )
}
