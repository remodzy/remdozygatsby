import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import { prepareArticle } from '~utils/mapArticles'
import Layout from '~components/Layout'
import SectionLabel from '~templates/shared/sectionLabel'
import SectionTitle from '~templates/shared/sectionTitle'

import styles from './Blog.module.css'
import SocialShare from './components/SocialShare'

const imageStyle = {
  margin: '80px 0',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
}

export default function Blog({ pathContext, pageResources }) {
  console.log(pageResources)
  if (!pageResources) {
    return null
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
      <div className={styles.background}></div>
    </Layout>
  )
}

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
