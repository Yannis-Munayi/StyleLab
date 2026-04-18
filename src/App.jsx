import { useEffect, useRef, useState } from 'react'
import { AppProvider, useApp, SCREENS } from './context/AppContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ShopProvider } from './context/ShopContext'
import { WishlistProvider } from './context/WishlistContext'
import { ExploreProvider, useExplore } from './context/ExploreContext'
import HomeScreen      from './screens/HomeScreen'
import WelcomeScreen   from './screens/WelcomeScreen'
import SeasonScreen    from './screens/SeasonScreen'
import CategoryScreen  from './screens/CategoryScreen'
import DiscoveryScreen from './screens/DiscoveryScreen'
import ResultsScreen   from './screens/ResultsScreen'
import AuthScreen      from './screens/AuthScreen'
import ProfileScreen   from './screens/ProfileScreen'
import WardrobeScreen  from './screens/WardrobeScreen'
import WishlistScreen  from './screens/WishlistScreen'
import ShopScreen      from './screens/ShopScreen'
import ExploreScreen   from './screens/ExploreScreen'
import AestheticScreen from './screens/AestheticScreen'
import TabBar          from './components/TabBar'

// Screens where the tab bar is hidden (focused setup flow)
const HIDE_TABS_ON = new Set([
  SCREENS.AUTH,
  SCREENS.SEASONS,
  SCREENS.CATEGORIES,
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

function ResumeModal({ progress, total, onContinue, onRestart }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div style={{
        width: '100%', maxWidth: 480,
        background: '#1a1a1a',
        borderRadius: '20px 20px 0 0',
        padding: '28px 24px 40px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '0 auto 24px' }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
          Continue your session?
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: '0 0 28px', lineHeight: 1.6 }}>
          You've rated <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{progress} of {total}</strong> items.
          Pick up where you left off, or start fresh.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={onRestart}
            style={{
              flex: 1, padding: '13px 0',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 12, color: 'rgba(255,255,255,0.6)',
              fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer',
            }}
          >
            Start fresh
          </button>
          <button
            onClick={onContinue}
            style={{
              flex: 1, padding: '13px 0',
              background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
              border: 'none',
              borderRadius: 12, color: '#fff',
              fontSize: 14, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  )
}

function AppShell() {
  const { state, dispatch } = useApp()
  const { user }            = useAuth()
  const { openAesthetic, openAestheticTab } = useExplore()
  const [activeTab, setActiveTab]       = useState('home')
  const [showResumeModal, setShowResumeModal] = useState(false)
  const prevUserRef = useRef(user)

  const showTabs = !HIDE_TABS_ON.has(state.screen)

  // Keep activeTab in sync when the quiz flow enters DISCOVERY
  useEffect(() => {
    if (state.screen === SCREENS.DISCOVERY) {
      setActiveTab('quiz')
    }
  }, [state.screen])

  // When the user signs out, reset to explore tab so ProfileScreen doesn't linger
  useEffect(() => {
    const wasSignedIn = prevUserRef.current !== null
    prevUserRef.current = user
    if (wasSignedIn && !user) {
      setActiveTab('home')
    }
  }, [user])

  // A session is "in progress" when the discovery queue is loaded and the
  // user has left the quiz tab (so they can be offered to resume).
  const sessionInProgress =
    state.screen === SCREENS.DISCOVERY && activeTab !== 'quiz'

  // Answered count for the modal
  const answeredCount = Object.keys(state.responses).length

  function handleTabChange(tabId) {
    if (tabId === 'quiz' && sessionInProgress) {
      setShowResumeModal(true)
      return
    }
    if (tabId.startsWith('aesthetic:')) {
      const id = tabId.replace('aesthetic:', '')
      openAestheticTab(id)
      setActiveTab(tabId)
    } else {
      setActiveTab(tabId)
    }
  }

  function handleContinue() {
    setShowResumeModal(false)
    setActiveTab('quiz')
  }

  function handleRestart() {
    setShowResumeModal(false)
    dispatch({ type: 'RESTART_QUIZ' })
    setActiveTab('quiz')
  }

  const isAestheticTab = activeTab.startsWith('aesthetic:')
  const aestheticId    = isAestheticTab ? activeTab.replace('aesthetic:', '') : null

  return (
    <div style={{ paddingBottom: showTabs ? 64 : 0 }}>
      {/* Quiz flow */}
      {(!showTabs || activeTab === 'quiz') && <QuizRouter />}

      {/* Main tabs */}
      {showTabs && activeTab === 'home' && (
        <HomeScreen setActiveTab={handleTabChange} />
      )}
      {showTabs && activeTab === 'explore' && (
        <ExploreScreen setActiveTab={handleTabChange} />
      )}
      {showTabs && isAestheticTab && (
        <AestheticScreen
          aestheticId={aestheticId ?? openAesthetic}
          setActiveTab={handleTabChange}
        />
      )}
      {showTabs && activeTab === 'wardrobe'  && <WardrobeScreen />}
      {showTabs && activeTab === 'wishlist'  && <WishlistScreen />}
      {showTabs && activeTab === 'shop'      && <ShopScreen />}
      {showTabs && activeTab === 'profile'  && (
        <ProfileScreen onBack={() => handleTabChange('quiz')} />
      )}

      {showTabs && (
        <TabBar activeTab={activeTab} setActiveTab={handleTabChange} />
      )}

      {/* Resume / restart modal */}
      {showResumeModal && (
        <ResumeModal
          progress={answeredCount}
          total={state.itemQueue.length}
          onContinue={handleContinue}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <ShopProvider>
          <WishlistProvider>
            <ExploreProvider>
              <AppShell />
            </ExploreProvider>
          </WishlistProvider>
        </ShopProvider>
      </AppProvider>
    </AuthProvider>
  )
}
