import React, { FC, ReactElement } from 'react'

import * as styles from './ProductsBlock.module.css'

export const BetaLabel: FC<unknown> = (): ReactElement => (
  <span className={styles.betaLabel}>BETA 1.4</span>
)

export const ComingSoonLabel: FC<unknown> = (): ReactElement => (
  <span className={styles.comingSoonLabel}>COMING SOON</span>
)
