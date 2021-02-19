import React, { ReactElement } from 'react'
import PrimaryContent from './components/PrimaryContent'

export default function Forms(): ReactElement {
  return (
    <>
      <PrimaryContent
        title='Oops. Page Not Found'
        subTitle='You just hit a route that doesn’t exist... the sadness'
      />
    </>
  )
}
