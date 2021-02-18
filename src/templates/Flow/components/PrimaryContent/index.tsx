import React, { FC, ReactElement, useCallback } from 'react'

import Button from '~components/Button'
import Label from '~components/Label'
import { authorize } from '~utils/auth'
import { useDeviceDetect } from '~utils/hooks'

import styles from './PrimaryContent.module.css'
import RSectionTitle from '~components/RSectionTitle'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSection from '~components/RSection'
import Artifacts from '~templates/Forms/components/PrimaryContent/Artifacts'

const Cover: FC<unknown> = (): ReactElement => (
  <div className={styles.backgroundCover} />
)

const PrimaryContent: React.FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

  const imageUrl = isMobile
    ? '/images/flow/m-flow-primary.png'
    : '/images/flow/flow-primary.png'

  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <RSection artifacts={Artifacts} cover={Cover}>
      <div className={styles.root}>
        <RSectionTitle>
          Tie your apps together,
          <br />
          Set yourself free.
        </RSectionTitle>
        <PrimarySubtitle>
          Automate business workflows by connecting your apps with roxFlow.
          Build smart integrations to break the information silos in your
          business.
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
      </div>
    </RSection>
  )
}

export default PrimaryContent
