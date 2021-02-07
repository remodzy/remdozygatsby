import React, { FC, ReactElement } from 'react'

import Artifacts from './Artifacts'
import styles from './PrimaryBlock.module.css'

const PrimaryBlock: FC<unknown> = (): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>
          We Build <span className={styles.highlightOrange}>Intuitive</span>{' '}
          Products For <span className={styles.highlightBlue}>Great</span> Teams
        </div>
      </div>
      <div className={styles.subtitle}>
        Unique and powerful suite of software to run your entire business,
        brought to you by a company with the long term vision to transform the
        way you work.
      </div>
    </div>
    <Artifacts />
  </div>
)

export default PrimaryBlock
