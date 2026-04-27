import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import styles from './AuthScreen.module.css'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

export default function AuthScreen() {
  const { signup, login, signInWithGoogle } = useAuth()
  const { dispatch }      = useApp()

  const [mode, setMode]           = useState('login') // 'login' | 'signup'
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [gender, setGender]       = useState('both')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  async function handleGoogle() {
    setError('')
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
      dispatch({ type: 'GO_TO_WELCOME' })
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('Google sign-in failed. Please try again.')
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'signup') {
        if (!name.trim()) { setError('Please enter your name.'); setLoading(false); return }
        await signup(email, password, name.trim())
        dispatch({ type: 'SET_GENDER', gender })
      } else {
        await login(email, password)
      }
      dispatch({ type: 'GO_TO_WELCOME' })
    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setLoading(false)
    }
  }

  function friendlyError(code) {
    switch (code) {
      case 'auth/email-already-in-use':   return 'That email is already registered. Try signing in.'
      case 'auth/invalid-email':          return 'Please enter a valid email address.'
      case 'auth/weak-password':          return 'Password must be at least 6 characters.'
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':     return 'Incorrect email or password.'
      default:                            return 'Something went wrong. Please try again.'
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.glow} />

      <div className={styles.card}>
        <div className={styles.logoMark}>SL</div>
        <h2 className={styles.title}>
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h2>
        <p className={styles.sub}>
          {mode === 'login'
            ? 'Sign in to see your style history.'
            : 'Save your results and track your style over time.'}
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <div className={styles.field}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>

              <div className={styles.genderField}>
                <label>Shop for</label>
                <div className={styles.genderRow}>
                  {[{ id: 'men', label: 'Men' }, { id: 'women', label: 'Women' }, { id: 'both', label: 'Both' }].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`${styles.genderPill} ${gender === opt.id ? styles.genderPillActive : ''}`}
                      onClick={() => setGender(opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              placeholder={mode === 'signup' ? 'At least 6 characters' : '••••••••'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine} />
        </div>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogle}
          disabled={googleLoading}
        >
          <GoogleIcon />
          {googleLoading ? 'Signing in…' : 'Continue with Google'}
        </button>

        <div className={styles.switchRow}>
          {mode === 'login' ? (
            <span>
              No account?{' '}
              <button className={styles.switchBtn} onClick={() => { setMode('signup'); setError('') }}>
                Create one
              </button>
            </span>
          ) : (
            <span>
              Already have one?{' '}
              <button className={styles.switchBtn} onClick={() => { setMode('login'); setError('') }}>
                Sign in
              </button>
            </span>
          )}
        </div>

        <button
          className={styles.guestBtn}
          onClick={() => dispatch({ type: 'GO_TO_WELCOME' })}
        >
          Continue as guest
        </button>
      </div>
    </div>
  )
}
