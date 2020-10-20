import React from 'react'

import { Pagination } from '~templates/BlogList'
import ArticlePreview from '~templates/shared/ArticlePreview'
import { Article } from '~utils/mapArticles'

import MainListItem from '../MainListItem'
import styles from './ListOfArticles.module.css'

type Props = {
  pagination: Pagination
  items: Article[]
}

export default function ListOfArticles({ pagination, items }: Props) {
  if (!items.length) {
    return null
  }

  const mainItem = items.splice(0, 1)[0]

  return (
    <div className={styles.root}>
      <MainListItem item={mainItem} />
      <div className={styles.listContainer}>
        {items.map((item: Article) => (
          <ArticlePreview
            key={item.id}
            image={item.image.fluid}
            imageTitle={item.image.imageTitle}
            imageTitleColor={'red'}
            title={item.title}
            text={item.description}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  )
}
