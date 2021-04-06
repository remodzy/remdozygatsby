import React, { FC, ReactElement } from 'react'

import * as styles from './GridRow.module.css'

type Props = {
  children: unknown
}

const GridRow: FC<Props> = ({ children }): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>{children}</div>
  </div>
)

export default GridRow
