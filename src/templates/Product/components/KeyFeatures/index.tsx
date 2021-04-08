import React, { FC, ReactElement } from 'react'

import RGrid, { ListItem } from '~components/RGrid'
import RSection from '~components/RSection'

import * as styles from './KeyFeaturesList.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

type Props = {
  list: ListItem[]
  artifacts?: () => ReactElement
}

const KeyFeatures: FC<Props> = ({
  list,
  artifacts: Artifacts,
}): ReactElement => (
  <RSection artifacts={Artifacts} cover={Cover}>
    <div className={styles.root}>
      <RGrid items={list} title='Key Features' />
    </div>
  </RSection>
)

export default KeyFeatures
