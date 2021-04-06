import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { PageRangeItem, paginationRange } from '~utils/paginationRange'

import PaginationItem from './components/PaginationItem'
import * as styles from './Pagination.module.css'

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
  const [pageList, setPageList] = useState<PageRangeItem[]>([])

  useEffect(() => {
    const pageRange = paginationRange(data.currentPage, data.numPages)
    setPageList(pageRange)
  }, [data])

  if (pageList.length < 2) {
    return null
  }

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
      {pageList.map((el: PageRangeItem, index) => (
        <PaginationItem
          key={index}
          item={el}
          isActive={data.currentPage === el}
        />
      ))}
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
