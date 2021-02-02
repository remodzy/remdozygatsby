import React, { FC, ReactElement } from 'react'

import styles from './PrimaryBlock.module.css'
import Artifacts from './Artifacts'

const PrimaryBlock: FC<unknown> = (): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>
          WE BUILD <span className={styles.highlightOrange}>INTUITIVE</span>{' '}
          PRODUCTS FOR <span className={styles.highlightBlue}>GREAT</span> TEAMS
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
