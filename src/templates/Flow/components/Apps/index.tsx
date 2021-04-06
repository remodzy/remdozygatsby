import React, { FC, ReactElement } from 'react'
import { useDeviceDetect } from '~utils/hooks'

import * as styles from './Apps.module.css'
import RSection from '~components/RSection'
import Artifacts from './Artifacts'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'

const Cover: FC<unknown> = (): ReactElement => (
  <div className={styles.backgroundCover} />
)

const PrimaryContent: React.FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

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

export default PrimaryContent
