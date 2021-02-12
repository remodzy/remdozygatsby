import React, { ReactElement } from 'react'

import RoxContainer from '~components/RoxContainer'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import styles from './Benefits.module.css'
import FeatureList from './FeatureList'

export default function Benefits(): ReactElement {
  return (
    <div className={styles.root}>
      <RoxContainer>
        <SectionLabel text='Benefits' color='primary' />
        <SectionTitle text='Features' />
        <FeatureList />
      </RoxContainer>
    </div>
  )
}
