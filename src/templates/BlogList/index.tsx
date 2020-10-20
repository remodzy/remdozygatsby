import { graphql } from 'gatsby'
import React from 'react'

import Layout from '~components/Layout'
import SectionTitle from '~templates/shared/sectionTitle'
import { prepareArticles, ResourceNode } from '~utils/mapArticles'
import ListOfArticles from './components/ListOfArticles'

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

export type Pagination = {
  hasNextPage: boolean
  limit: number
  nextPageLink: string
  pageNumber: number
  skip: number
}

export default function BlogList({ pathContext, pageResources }: Props) {
  const items = prepareArticles(pageResources?.json?.data)

  return (
    <Layout>
      <SectionTitle text='Insights from the Remodzy team' />
      <ListOfArticles pagination={pathContext} items={items} />
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
