import React from 'react'
import { isMobile } from 'react-device-detect'
import { IntlShape } from 'react-intl/src/types'

import BlockWrapper from '~components/BlockWrapper'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import {
  InDesktopArtifacts,
  InMobileArtifacts,
  OutDesktopArtifacts,
  OutMobileArtifacts,
} from './Artifacts'
import * as styles from './HowItWorks.module.css'
import Item from './Item'

export type HowItWorksItem = {
  key: string
  icon: () => React.ReactElement<any, any>
  title?: string
  text: string
}

type Props = {
  title: string
  list: HowItWorksItem[]
  intl: IntlShape
}

//TODO: not used?
const HowItWorks: React.FC<Props> = ({ title, list, intl }) => {
  return (
    <div className={styles.root}>
      <BlockWrapper>
        <SectionLabel
          text={intl.formatMessage({ id: 'how_it_works' })}
          color='warning'
        />
        <SectionTitle text={title} />
        <div className={styles.itemsContainer}>
          {list.map(props => (
            <Item {...props} />
          ))}
        </div>
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

export default HowItWorks
