import * as React from 'react'
import { Link } from 'gatsby'
import PaginationItem from './components/PaginationItem'
import styles from './Pagination.module.css'

export type Pagination = {
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  prevPageLink: string
  nextPageLink: string
  currentPage: number
  skip: number
  numPages: number
}

type Props = {
  data: Pagination
}

const PaginationBlock: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.root}>
      <Link
        to={data.prevPageLink}
        className={`${styles.link} ${
          !data.hasPrevPage ? styles.disabledLink : ''
        }`}
      >
        Prev
      </Link>
      <PaginationItem num={1} isActive={data.currentPage === 1} />
      <PaginationItem num={2} isActive={data.currentPage === 2} />
      <Link
        to={data.nextPageLink}
        className={`${styles.link} ${
          !data.hasNextPage ? styles.disabledLink : ''
        }`}
      >
        Next
      </Link>
    </div>
  )
}

export default PaginationBlock
