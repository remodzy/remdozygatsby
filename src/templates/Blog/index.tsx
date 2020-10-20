import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import { prepareArticle } from '~utils/mapArticles'
import Layout from '~components/Layout'
import SectionLabel from '~templates/shared/sectionLabel'
import SectionTitle from '~templates/shared/sectionTitle'
import styles from './Blog.module.css'

const imageStyle = {
  margin: '80px 0',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
}

export default function Blog() {
  const data = useStaticQuery(blogQuery)
  const item = prepareArticle(data.contentfulBlogPost)
  return (
    <Layout>
      <div className={styles.root}>
        <SectionLabel text={item.image.imageTitle} color='success' />
        <SectionTitle text={item.title} />
        <div>
          <Img fluid={item.image.fluid} style={imageStyle} />
          <div
            className={styles.contentWrapper}
            dangerouslySetInnerHTML={createMarkup(item.body)}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query BlogPageQuery {
    contentfulBlogPost {
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
