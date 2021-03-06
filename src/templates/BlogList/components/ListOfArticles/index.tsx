import React from 'react'
import { isMobile } from 'react-device-detect'

import ArticlePreview from '~components/ArticlePreview'
import PaginationBlock, { Pagination } from '~components/Pagination'
import { Article } from '~utils/mapArticles'

import MainListItem from '../MainListItem'
import * as styles from './ListOfArticles.module.css'

type Props = {
  pagination: Pagination
  items: Article[]
}

export default function ListOfArticles({ pagination, items }: Props) {
  if (!items.length) {
    return null
  }

  return (
    <div className={styles.root}>
      {!isMobile && <MainListItem item={items.splice(0, 1)[0]} />}
      <div className={styles.listContainer}>
        {items.map((item: Article) => (
          <ArticlePreview
            key={item.id}
            image={item.image.gatsbyImageData}
            imageTitle={item.image.imageTitle}
            imageTitleColor={'blue'}
            title={item.title}
            text={item.description}
            slug={item.slug}
          />
        ))}
      </div>
      <PaginationBlock data={pagination} />
    </div>
  )
}
