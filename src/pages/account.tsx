import React from 'react'
import { isAuthenticated, login, getProfile } from '../utils/auth'

export default function Account() {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  return <div>{JSON.stringify(user)}</div>
}
