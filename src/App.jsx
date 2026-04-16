import { useEffect, useRef, useState } from 'react'
import { AppProvider, useApp, SCREENS } from './context/AppContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ShopProvider } from './context/ShopContext'
import { ExploreProvider, useExplore } from './context/ExploreContext'
import WelcomeScreen   from './screens/WelcomeScreen'
import SeasonScreen    from './screens/SeasonScreen'
import CategoryScreen  from './screens/CategoryScreen'
import DiscoveryScreen from './screens/DiscoveryScreen'
import ResultsScreen   from './screens/ResultsScreen'
import AuthScreen      from './screens/AuthScreen'
import ProfileScreen   from './screens/ProfileScreen'
import WardrobeScreen  from './screens/WardrobeScreen'
import ShopScreen      from './screens/ShopScreen'
import ExploreScreen   from './screens/ExploreScreen'
import AestheticScreen from './screens/AestheticScreen'
import TabBar          from './components/TabBar'

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
  const { state }    = useApp()
  const { user }     = useAuth()
  const { openAesthetic, openAestheticTab } = useExplore()
  const [activeTab, setActiveTab] = useState('explore')
  const prevUserRef  = useRef(user)

  const showTabs = !HIDE_TABS_ON.has(state.screen)

  // When the user signs out, reset to explore tab so ProfileScreen doesn't linger
  useEffect(() => {
    const wasSignedIn = prevUserRef.current !== null
    prevUserRef.current = user
    if (wasSignedIn && !user) {
      setActiveTab('explore')
    }
  }, [user])

  // Wrap setActiveTab so Explore context can react to tab switches
  function handleTabChange(tabId) {
    // If switching to a saved aesthetic tab, make sure it opens in Explore
    if (tabId.startsWith('aesthetic:')) {
      const id = tabId.replace('aesthetic:', '')
      openAestheticTab(id)
      setActiveTab(tabId)
    } else {
      setActiveTab(tabId)
    }
  }

  // Determine what to render
  const isAestheticTab = activeTab.startsWith('aesthetic:')
  const aestheticId    = isAestheticTab ? activeTab.replace('aesthetic:', '') : null

  return (
    <div style={{ paddingBottom: showTabs ? 64 : 0 }}>
      {/* Quiz flow */}
      {(!showTabs || activeTab === 'quiz') && <QuizRouter />}

      {/* Main tabs */}
      {showTabs && activeTab === 'explore'   && (
        <ExploreScreen setActiveTab={handleTabChange} />
      )}
      {showTabs && isAestheticTab && (
        <AestheticScreen
          aestheticId={aestheticId ?? openAesthetic}
          setActiveTab={handleTabChange}
        />
      )}
      {showTabs && activeTab === 'wardrobe'  && <WardrobeScreen />}
      {showTabs && activeTab === 'shop'      && <ShopScreen />}
      {showTabs && activeTab === 'profile'   && (
        <ProfileScreen onBack={() => handleTabChange('quiz')} />
      )}

      {showTabs && (
        <TabBar activeTab={activeTab} setActiveTab={handleTabChange} />
      )}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <ShopProvider>
          <ExploreProvider>
            <AppShell />
          </ExploreProvider>
        </ShopProvider>
      </AppProvider>
    </AuthProvider>
  )
}
