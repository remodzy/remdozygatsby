import { graphql, navigate, useStaticQuery } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-react-intl'
import React, { FC, ReactElement } from 'react'
import { IntlShape } from 'react-intl/src/types'

import Button from '~components/Button'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
// import SectionLabel from '~components/SectionLabel'
import { Article, prepareArticles } from '~utils/mapArticles'

import ArticlePreview from '../ArticlePreview'
import Artifacts from './Artifacts'
import * as styles from './Blog.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

type Props = {
  intl: IntlShape
}

const RBlog: React.FC<Props> = ({ intl }) => {
  const items = useStaticQuery(query)
  const articles = prepareArticles(items)

  return (
    <RSection cover={Cover} artifacts={Artifacts} allowOverflow>
      <div className={styles.root}>
        <div className={styles.header}>
          {/*<SectionLabel text='BLOG' color='success' />*/}
          <RSectionTitle>
            {intl.formatMessage({ id: 'useful_resources' })}
          </RSectionTitle>
        </div>
        <div className={styles.list}>
          {articles.map((item: Article) => (
            <ArticlePreview
              key={item.id}
              imageTitle={item.image.imageTitle}
              imageTitleColor='#5D9A78'
              image={item?.image.gatsbyImageData}
              title={item?.title}
              text={item?.description}
              slug={item?.slug}
            />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Button
            className='primary-btn'
            label={intl.formatMessage({ id: 'view_all' })}
            handleClick={() => navigate(`/blog/`)}
          />
        </div>
      </div>
    </RSection>
  )
}

export default injectIntl(RBlog)

export const query = graphql`
  query BlogBlockQuery {
    articles: allContentfulBlogPost(
      skip: 0
      limit: 3
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
