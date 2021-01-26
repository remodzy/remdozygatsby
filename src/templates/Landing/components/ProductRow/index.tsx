import React, { FC, ReactElement } from 'react'

import styles from './styles.module.css'

type Props = {
  children: unknown
}

const ProductRow: FC<Props> = ({ children }): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>{children}</div>
  </div>
)

export default ProductRow