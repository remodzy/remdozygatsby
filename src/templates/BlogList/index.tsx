import { graphql } from 'gatsby'
import React, { ReactElement } from 'react'

import Layout from '~components/Layout'
import { Pagination } from '~components/Pagination'
import SectionTitle from '~components/SectionTitle'
import { prepareArticles, ResourceNode } from '~utils/mapArticles'

import * as styles from './BlogList.module.css'
import ListOfArticles from './components/ListOfArticles'

type Props = {
  pageResources: ContextPageResource
  pageContext: Pagination
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

export default function BlogList({
  pageContext,
  pageResources,
}: Props): ReactElement {
  const items = prepareArticles(pageResources?.json?.data)

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <SectionTitle text='Insights from the Roxabo team' />
        <ListOfArticles pagination={pageContext} items={items} />
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
