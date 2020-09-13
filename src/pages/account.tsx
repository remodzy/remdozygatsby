import React from 'react'
import { isAuthenticated, authorize, getProfile } from '~utils/auth'

export default function Account() {
  if (!isAuthenticated()) {
    authorize()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  return <div>{JSON.stringify(user)}</div>
}
