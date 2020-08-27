import { WebAuth, Auth0Result } from 'auth0-js'
import { navigate } from 'gatsby'

const isBrowser = typeof window !== 'undefined'

const auth: any = isBrowser
  ? new WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: 'code',
      scope: 'openid profile email',
    } as any)
  : {}

type Tokens = {
  accessToken: string
  idToken: string
  expiresAt: number | null
}

const tokens: Tokens = {
  accessToken: '',
  idToken: '',
  expiresAt: null,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem('isLoggedIn') === 'true'
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize({
    hasError: false,
    signUp: true,
  })
}

const setSession = (cb = () => {}) => (err: any, authResult: any) => {
  if (err) {
    navigate('/')
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/account')
    cb()
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}
