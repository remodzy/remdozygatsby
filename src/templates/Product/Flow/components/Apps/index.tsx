import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import RSection from '~components/RSection'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

import * as styles from './Apps.module.css'
import Artifacts from './Artifacts'

const Cover: FC<unknown> = (): ReactElement => (
  <div className={styles.backgroundCover} />
)

const AppsContent: React.FC<unknown> = (): ReactElement => {
  const imageUrl = isMobile
    ? '/images/apps/m-apps-primary.png'
    : '/images/apps/apps-primary.png'

  return (
    <RSection artifacts={Artifacts} cover={Cover}>
      <div className={styles.root}>
        <SectionLabel text='Apps' color='primary' />
        <SectionTitle text='Bring your business apps together' />
        <img className={styles.image} src={imageUrl} alt='apps primary image' />
      </div>
    </RSection>
  )
}

export default AppsContent
