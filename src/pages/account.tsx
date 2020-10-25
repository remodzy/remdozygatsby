import React, { useEffect } from 'react'
import { getClient } from '~utils/auth'

const auth0 = getClient()

export default function Account() {
  let usr
  useEffect(() => {
    window.addEventListener('load', () => {
      auth0.handleRedirectCallback().then((redirectResult: any) => {
        console.log(redirectResult)
        //logged in. you can get the user profile like this:
        auth0.getUser().then((user: any) => {
          usr = user
          console.log(user)
        })
      })
    })

    return () => {
      window.removeEventListener('load', () => {})
    }
  }, [])
  return <div>{JSON.stringify(usr)}</div>
}
