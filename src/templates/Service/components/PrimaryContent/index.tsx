import React, { ReactElement, useCallback } from 'react'

import Button from '~components/Button'
import Label from '~components/Label'
import { authorize } from '~utils/auth'
import { useDeviceDetect } from '~utils/hooks'

import * as styles from './PrimaryContent.module.css'
import Artifacts from './Artifacts'
import RSectionTitle from '~components/RSectionTitle'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSection from '~components/RSection'

const PrimaryContent: React.FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

  const imageUrl = isMobile
    ? '/images/service/m-service-primary.png'
    : '/images/service/service-primary.png'

  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <RSection artifacts={Artifacts} className={styles.backgroundCover}>
      {/*<div className={styles.backgroundCover} />*/}
      <div className={styles.root}>
        {/*<div className={styles.wrapper}>*/}
        <RSectionTitle>
          Field service
          <br />
          management software
        </RSectionTitle>
        <PrimarySubtitle>
          With roxServices from Roxabo, you can schedule and manage jobs,
          dispatch them to field technicians,and provide ETAs to customers with
          notifications.
        </PrimarySubtitle>

        <div className={styles.comingSoonLabel}>COMING SOON</div>
        <div className={styles.buttonContainer}>
          <Button
            label='Start Free Trial'
            colors={{ text: '#ffffff', background: '#E19763' }}
            handleClick={handleClick}
          />
          <div className={styles.labelContainer}>
            <Label text='No credit card required' />
          </div>
        </div>
        <img src={imageUrl} alt='service primary image' />
        {/*</div>*/}
      </div>
    </RSection>
  )
}

export default PrimaryContent
