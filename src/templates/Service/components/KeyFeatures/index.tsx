import React, { FC, ReactElement } from 'react'

import RGrid from '~components/RGrid'
import RSection from '~components/RSection'

import Artifacts from './Artifacts'
import styles from './KeyFeaturesList.module.css'
import { getConfigList } from './listConfig'

const list = getConfigList()

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

const KeyFeatures = (): ReactElement => (
  <RSection artifacts={Artifacts} cover={Cover}>
    <div className={styles.root}>
      <RGrid items={list} title='Key Features' />
    </div>
  </RSection>
)

export default KeyFeatures
