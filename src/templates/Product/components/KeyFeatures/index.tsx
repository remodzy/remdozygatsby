import { injectIntl } from 'gatsby-plugin-react-intl'
import React, { FC, ReactElement } from 'react'
import { IntlShape } from 'react-intl/src/types'

import RGrid, { ListItem } from '~components/RGrid'
import RSection from '~components/RSection'

import * as styles from './KeyFeaturesList.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

type Props = {
  list: ListItem[]
  artifacts?: () => ReactElement
  intl: IntlShape
}

const KeyFeatures: FC<Props> = ({
  list,
  artifacts: Artifacts,
  intl,
}): ReactElement => (
  <RSection artifacts={Artifacts} cover={Cover}>
    <div className={styles.root}>
      <RGrid items={list} title={intl.formatMessage({ id: 'key_features' })} />
    </div>
  </RSection>
)

export default injectIntl(KeyFeatures)
