import { Link } from 'gatsby'
import React from 'react'

import styles from './PaginationItem.module.css'

type Props = {
  item: number | string
  isActive?: boolean
}

const PaginationItem: React.FC<Props> = ({ item, isActive }) =>
  item === '...' ? (
    <span className={styles.dots}>...</span>
  ) : (
    <Link
      to={`/blog/${item}`}
      className={`${styles.root} ${isActive ? styles.active : ''}`}
    >
      {item}
    </Link>
  )

export default PaginationItem
