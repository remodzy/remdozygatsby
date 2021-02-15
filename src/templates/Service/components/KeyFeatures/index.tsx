import React, { ReactElement } from 'react'

import RGrid from '~components/RGrid'
import RSection from '~components/RSection'

import Artifacts from './Artifacts'
import styles from './KeyFeaturesList.module.css'
import { getConfigList } from './listConfig'

const list = getConfigList()

const KeyFeatures = (): ReactElement => (
  <RSection artifacts={Artifacts}>
    <div className={styles.root}>
      <RGrid items={list} title='Key Features' />
    </div>
  </RSection>
)

export default KeyFeatures
