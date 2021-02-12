import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'

import Button from '~components/Button'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'
import DotsArtifact from '~components/Dot'
import RoxContainer from '~components/RoxContainer'
import SectionLabel from '~components/SectionLabel'
import SectionTitle from '~components/SectionTitle'
import { useDeviceDetect } from '~utils/hooks'
import { Article, prepareArticles } from '~utils/mapArticles'

import ArticlePreview from '../ArticlePreview'
import styles from './Blog.module.css'

export default function Blog(): ReactElement {
  const { isMobile } = useDeviceDetect()
  const items = useStaticQuery(query)
  const articles = prepareArticles(items)

  return (
    <div className={styles.root}>
      <RoxContainer>
        <SectionLabel text='BLOG' color='success' />
        <SectionTitle text='Useful Resources' />
        <div className={styles.list}>
          {articles.map((item: Article) => (
            <ArticlePreview
              key={item.id}
              imageTitle='Business Management'
              imageTitleColor='#5D9A78'
              image={item?.image?.fluid}
              title={item?.title}
              text={item?.description}
              slug={item?.slug}
            />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Button
            className='primary-btn'
            label='Learn More'
            handleClick={() => {}}
          />
        </div>
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </RoxContainer>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

export const query = graphql`
  query BlogBlockQuery {
    articles: allContentfulBlogPost(
      skip: 0
      limit: 3
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

function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={684}
        right={15.16}
        columns={3}
        zIndex={1}
        size={3.9}
        gap={18.58}
        // prettier-ignore
        list={[
          0,0,0,
          0,1,0,
          0,1,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        bottom={148}
        right={14.22}
        columns={5}
        zIndex={1}
        size={3.9}
        gap={18.58}
        // prettier-ignore
        list={[
          0,0,0,0,0,
          0,1,0,0,1,
          0,1,0,0,0,
          0,0,0,0,0,
        ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={34}
        centerSize={6.07}
        left='78.13%'
        top={1336}
      />
    </>
  )
}

function OutMobileArtifacts(): ReactElement {
  return (
    <>
      <DotsArtifact
        top={0}
        left={15.36}
        columns={3}
        zIndex={1}
        size={3.9}
        gap={18.58}
        // prettier-ignore
        list={[
          0,0,1,
          0,0,0,
          0,0,0,
          1,1,0,
        ]}
      />
    </>
  )
}

function InDesktopArtifacts(): ReactElement {
  return (
    <>
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={38}
        centerSize={7.6}
        left='76.0625%'
        top={40}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={64}
        centerSize={11.43}
        left='6%'
        top={354}
      />
    </>
  )
}

function OutDesktopArtifacts(): ReactElement {
  return (
    <>
      <DotsArtifact
        top={0}
        left={187}
        columns={8}
        zIndex={1}
        size={5.98}
        gap={28.49}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />

      <DotsArtifact
        top={804}
        right={22}
        columns={6}
        zIndex={1}
        size={6.03}
        gap={28.75}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,
          0,1,0,0,1,0,
          0,1,0,0,0,0,
          0,0,0,0,0,1,
        ]}
      />
    </>
  )
}
