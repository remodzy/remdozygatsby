import React, { ReactElement } from 'react'

import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import styles from './Benefits.module.css'
import FeatureList from './featureList'

export default function Benefits(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <SectionLabel text='Benefits' color='primary' />
        <SectionTitle text='Features' />
        <FeatureList />
      </div>
    </div>
  )
}
