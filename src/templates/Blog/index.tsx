import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'

import Layout from '~components/Layout'
import { Pagination } from '~components/Pagination'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'
import SocialShare from '~components/SocialShare'
import { createMarkup } from '~utils/createMarkup'
import { useDeviceDetect } from '~utils/hooks'
import { prepareArticle, ResourceNode } from '~utils/mapArticles'

import * as styles from './Blog.module.css'

const imageStyle = {
  margin: '80px 0',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
}

type Props = {
  pageContext: Pagination
  pageResources: {
    json: {
      data: {
        article: ResourceNode
      }
    }
  }
}

const Blog: React.FC<Props> = ({ pageContext, pageResources }) => {
  const { isMobile } = useDeviceDetect()
  if (!pageResources) {
    return null
  }

  if (isMobile) {
    imageStyle.margin = '54px 0'
  }

  const item = prepareArticle(pageResources?.json?.data?.article)

  return (
    <Layout article={item}>
      <RSection>
        <div className={styles.root}>
          <SectionLabel text={item.image.imageTitle} color='success' />
          <RSectionTitle>{item.title}</RSectionTitle>
          <div>
            {item.image.gatsbyImageData && (
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt=''
                style={imageStyle}
              />
            )}
            <div className={styles.contentWrapper}>
              <div dangerouslySetInnerHTML={createMarkup(item.body)} />
              <SocialShare title={item.title} link={window.location.href} />
            </div>
          </div>
        </div>
      </RSection>
      {!isMobile && <div className={styles.background} />}
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
