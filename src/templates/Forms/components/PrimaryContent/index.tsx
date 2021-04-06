import React, { FC, ReactElement, useCallback } from 'react'

import Button from '~components/Button'
import Label from '~components/Label'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSectionTitle from '~components/RSectionTitle'
import { authorize } from '~utils/auth'

import Artifacts from './Artifacts'
import * as styles from './PrimaryContent.module.css'
import RSection from '~components/RSection'

type Props = {
  title: string
  subTitle: string
  image: () => ReactElement
}

const Cover: FC<unknown> = (): ReactElement => (
  <div className={styles.backgroundCover} />
)

const PrimaryContent: React.FC<Props> = ({
  title,
  subTitle,
  image: PrimaryImage,
}) => {
  const handleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <RSection artifacts={Artifacts} cover={Cover}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <RSectionTitle>{title}</RSectionTitle>
          <PrimarySubtitle>{subTitle}</PrimarySubtitle>
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
          <div className={styles.imageWrapper}>
            <PrimaryImage />
          </div>
        </div>
      </div>
    </RSection>
  )
}

export default PrimaryContent
