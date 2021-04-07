import { navigate } from 'gatsby'
import React, { ReactElement, useCallback } from 'react'

import PrimaryContent from '~components/PrimaryContent'

import Artifacts from './components/PrimaryContent/Artifacts'

export default function Forms(): ReactElement {
  const handleClick = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <>
      <PrimaryContent
        title='Oops. Page Not Found'
        subTitle='You just hit a route that doesn’t exist... the sadness'
        handleClick={handleClick}
        artifacts={Artifacts}
        buttonLabel='Back to home'
        buttonColors={{
          border: '#4864eb',
          text: '#4864eb',
          background: '#ffffff',
        }}
        creditCardInfo={false}
        doubleButtonMargins
      />
    </>
  )
}
