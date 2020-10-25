import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import { prepareArticle, ResourceNode } from '~utils/mapArticles'
import Layout from '~components/Layout'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'
import { Pagination } from '~components/Pagination'

import SocialShare from './components/SocialShare'
import styles from './Blog.module.css'
import { useDeviceDetect } from '~utils/hooks'

const imageStyle = {
  margin: '80px 0',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
}

type Props = {
  pathContext: Pagination
  pageResources: {
    json: {
      data: {
        article: ResourceNode
      }
    }
  }
}

const Blog: React.FC<Props> = ({ pathContext, pageResources }) => {
  const { isMobile } = useDeviceDetect()
  if (!pageResources) {
    return null
  }

  if (isMobile) {
    imageStyle.margin = '54px 0'
  }

  const item = prepareArticle(pageResources?.json?.data?.article)

  return (
    <Layout>
      <div className={styles.root}>
        <SectionLabel text={item.image.imageTitle} color='success' />
        <SectionTitle text={item.title} />
        <div>
          <Img fluid={item.image.fluid} style={imageStyle} />
          <div className={styles.contentWrapper}>
            <div dangerouslySetInnerHTML={createMarkup(item.body)}></div>
            <SocialShare />
          </div>
        </div>
      </div>
      {!isMobile && <div className={styles.background}></div>}
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogPageQuery($id: String) {
    article: contentfulBlogPost(id: { eq: $id }) {
      body {
        childMarkdownRemark {
          html
        }
      }
      ...Article
    }
  }
`

function createMarkup(__html: string = '') {
  return { __html }
}
