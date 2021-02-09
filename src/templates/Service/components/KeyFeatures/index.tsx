import React, { ReactElement } from 'react'

import SectionTitle from '~components/SectionTitle'

import KeyFeaturesList from './components/KeyFeaturesList'
import serviceStyles from './Service.module.css'

export default function KeyFeatures(): ReactElement {
  return (
    <div className={serviceStyles.root}>
      <SectionTitle text='Key Features' />
      <KeyFeaturesList />
    </div>
  )
}
