import React, { FC, ReactElement } from 'react'

import styles from './RSectionTitle.module.css'

const RSectionTitle: FC<unknown> = ({ children }): ReactElement => (
  <div className={styles.root}>{children}</div>
)

export default RSectionTitle
