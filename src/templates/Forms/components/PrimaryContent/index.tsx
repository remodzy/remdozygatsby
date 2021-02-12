import React, { useCallback } from 'react'

import Button from '~components/Button'
import Label from '~components/Label'
import RoxContainer from '~components/RoxContainer'
import { authorize } from '~utils/auth'

import Artifacts from './Artifacts'
import styles from './PrimaryContent.module.css'

type Props = {
  title: string
  subTitle: string
  image: string
}

const PrimaryContent: React.FC<Props> = ({ title, subTitle, image }) => {
  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.backgroundCover} />
      <RoxContainer>
        <div className={styles.wrapper}>
          <div
            className={styles.primaryLabel}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className={styles.secondaryLabel}>{subTitle}</div>
          <div className={styles.buttonContainer}>
            <Button
              label='Start Free Trial'
              className='primary-btn'
              handleClick={handleClick}
            />
            <div className={styles.labelContainer}>
              <Label text='No credit card required' />
            </div>
          </div>

          <img src={image} alt='' />
        </div>
      </RoxContainer>
      <Artifacts />
    </div>
  )
}

export default PrimaryContent
