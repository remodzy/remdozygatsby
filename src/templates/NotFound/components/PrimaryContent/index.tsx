import React, { useCallback } from 'react'

import Button from '~components/Button'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSectionTitle from '~components/RSectionTitle'
import { authorize } from '~utils/auth'

import Artifacts from './Artifacts'
import styles from './PrimaryContent.module.css'
import RSection from '~components/RSection'
import { getColor } from '~utils/colors'

const colors = getColor({ group: 'main', color: 'primary' })

type Props = {
  title: string
  subTitle: string
}

const PrimaryContent: React.FC<Props> = ({ title, subTitle }) => {
  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <RSection artifacts={Artifacts}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <RSectionTitle>{title}</RSectionTitle>
          <PrimarySubtitle>{subTitle}</PrimarySubtitle>
          <div className={styles.buttonContainer}>
            <Button
              label='Back to home'
              className={`${styles.button} btn default-btn`}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </RSection>
  )
}

export default PrimaryContent
