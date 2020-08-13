import React from 'react'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import FeatureList from './featureList'

export default function Benefits() {
  return (
    <div style={{ marginTop: 150, marginBottom: 100 }}>
      <SectionLabel text='Benefits' color='primary' />
      <SectionTitle text='Features' />
      <FeatureList />
    </div>
  )
}
