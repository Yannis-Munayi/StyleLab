import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import styles from './AuthScreen.module.css'

export default function AuthScreen() {
  const { signup, login } = useAuth()
  const { dispatch }      = useApp()

  const [mode, setMode]         = useState('login') // 'login' | 'signup'
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'signup') {
        if (!name.trim()) { setError('Please enter your name.'); setLoading(false); return }
        await signup(email, password, name.trim())
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
