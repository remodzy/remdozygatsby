import React, { FC, ReactElement } from 'react'

import PrimarySubtitle from '~components/PrimarySubtitle'
import RSectionTitle from '~components/RSectionTitle'
import RSection from '~components/RSection'

import Artifacts from './Artifacts'
import styles from './PrimaryBlock.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

const PrimaryBlock: FC<unknown> = (): ReactElement => (
  <RSection cover={Cover} artifacts={Artifacts}>
    <div className={styles.wrapper}>
      <RSectionTitle>
        We Build <span className={styles.highlightOrange}>Intuitive</span>{' '}
        Products For <span className={styles.highlightBlue}>Great</span> Teams
      </RSectionTitle>
      <PrimarySubtitle>
        Unique and powerful suite of software to run your entire business,
        brought to you by a company with the long term vision to transform the
        way you work.
      </PrimarySubtitle>
    </div>
  </RSection>
)

export default PrimaryBlock
