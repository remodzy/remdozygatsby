import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~components/Layout'
import SectionTitle from '~components/SectionTitle'
import { Pagination } from '~components/Pagination'
import { prepareArticles, ResourceNode } from '~utils/mapArticles'
import ListOfArticles from './components/ListOfArticles'

import styles from './BlogList.module.css'

type Props = {
  pageResources: ContextPageResource
  pathContext: Pagination
}

type ContextPageResource = {
  json: {
    data: {
      articles: {
        edges: {
          node: ResourceNode
        }[]
      }
    }
  }
}

export default function BlogList({ pathContext, pageResources }: Props) {
  const items = prepareArticles(pageResources?.json?.data)

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <SectionTitle text='Insights from the Roxabo team' />
        <ListOfArticles pagination={pathContext} items={items} />
        {/* <Artifacts /> */}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogListPageQuery($skip: Int, $limit: Int) {
    articles: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [createdAt] }
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
`
