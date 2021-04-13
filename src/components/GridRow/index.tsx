import React, { FC, ReactElement } from 'react'

import * as styles from './GridRow.module.css'

type Props = {
  children: unknown
  align?: 'left' | 'right'
}

const GridRow: FC<Props> = ({ children, align = 'left' }): ReactElement => (
  <div className={styles.root}>
    <div
      className={styles.wrapper}
      style={{
        flexDirection: align === 'right' ? 'row-reverse' : 'row',
      }}
    >
      {children}
    </div>
  </div>
)

export default GridRow
