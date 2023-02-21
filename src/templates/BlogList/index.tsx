import { graphql, PageProps } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-react-intl'
import React from 'react'
import { IntlShape } from 'react-intl/src/types'

import Layout from '~components/Layout'
import { Pagination } from '~components/Pagination'
import SectionTitle from '~components/SectionTitle'
import { prepareArticles, ResourceNode } from '~utils/mapArticles'

import * as styles from './BlogList.module.css'
import ListOfArticles from './components/ListOfArticles'

type Props = PageProps & {
  data: {
    articles: {
      edges: {
        node: ResourceNode
      }[]
    }
  }
  pageContext: Pagination
  intl: IntlShape
}

const BlogList: React.FC<Props> = ({ pageContext, data, intl }) => {
  const items = prepareArticles(data)

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <SectionTitle text={intl.formatMessage({ id: 'insights' })} />
        <ListOfArticles pagination={pageContext} items={items} />
        {/* <Artifacts /> */}
      </div>
    </Layout>
  )
}

export default injectIntl(BlogList)

export const pageQuery = graphql`
  query BlogListPageQuery($skip: Int, $limit: Int) {
    articles: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { createdAt: DESC }
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
`
