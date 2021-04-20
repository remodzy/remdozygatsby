import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { isMobile } from 'react-device-detect'

import Layout from '~components/Layout'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'
import SocialShare from '~components/SocialShare'
import { createMarkup } from '~utils/createMarkup'
import { prepareArticle, ResourceNode } from '~utils/mapArticles'

import * as styles from './Generic.module.css'

const imageStyle = {
  margin: '80px 0',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
}

type Props = PageProps & {
  data: {
    article: ResourceNode
  }
}

const Generic: React.FC<Props> = ({ data, location }) => {
  if (!data) {
    return null
  }

  if (isMobile) {
    imageStyle.margin = '54px 0'
  }

  const item = prepareArticle(data?.article)

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
              <SocialShare title={item.title} link={location.href} />
            </div>
          </div>
        </div>
      </RSection>
      {!isMobile && <div className={styles.background} />}
    </Layout>
  )
}

export default Generic

export const blogQuery = graphql`
  query GenericPageQuery($id: String) {
    article: contentfulGenericPage(id: { eq: $id }) {
      body {
        childMarkdownRemark {
          html
        }
      }
      ...GenericArticle
    }
  }
`
