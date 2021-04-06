import React, { useCallback } from 'react'
import { navigate } from 'gatsby'

import Button from '~components/Button'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSectionTitle from '~components/RSectionTitle'
import RSection from '~components/RSection'

import Artifacts from './Artifacts'
import * as styles from './PrimaryContent.module.css'

type Props = {
  title: string
  subTitle: string
}

const PrimaryContent: React.FC<Props> = ({ title, subTitle }) => {
  const handleClick = useCallback(() => {
    navigate('/')
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
