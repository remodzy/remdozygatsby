import React, { useEffect } from 'react'
import { handleAuthentication } from '~utils/auth'

export default function Callback() {
  useEffect(() => {
    handleAuthentication()
  }, [])

  return <div>Loading...</div>
}
