import * as React from 'react'

import styles from './PaginationItem.module.css'

type Props = {
  num: number
  isActive?: boolean
}

const PaginationItem: React.FC<Props> = ({ num, isActive }) => (
  <div className={`${styles.root} ${isActive ? styles.active : ''}`}>{num}</div>
)
export default PaginationItem
