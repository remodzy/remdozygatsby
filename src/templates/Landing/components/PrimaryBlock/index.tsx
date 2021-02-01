import React, { FC, ReactElement } from 'react'

import styles from './PrimaryBlock.module.css'
import Artifacts from './Artifacts'

const PrimaryBlock: FC<unknown> = (): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>
          WE BUILD GREAT PRODUCTS FOR{' '}
          <span className={styles.highlight}>GREAT</span> TEAMS
        </div>
      </div>
      <div className={styles.subtitle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type.
      </div>
    </div>
    <Artifacts />
  </div>
)

export default PrimaryBlock
