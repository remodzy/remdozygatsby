import { StaticImage } from 'gatsby-plugin-image'
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
  return (
    <RSection artifacts={Artifacts} cover={Cover}>
      <div className={styles.root}>
        <SectionLabel text='Apps' color='primary' />
        <SectionTitle text='Bring your business apps together' />
        {isMobile ? (
          <StaticImage
            className={styles.image}
            src='./m-apps-primary.png'
            alt='apps primary image'
          />
        ) : (
          <StaticImage
            className={styles.image}
            src='./apps-primary.png'
            alt='apps primary image'
          />
        )}
      </div>
    </RSection>
  )
}

export default AppsContent
