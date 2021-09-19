import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ReactElement } from 'react'

import { AnimatedWord } from '~components/AnimatedWord'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'

import Artifacts from './Artifacts'
import * as styles from './PrimaryBlock.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

export default function PrimaryBlock(): ReactElement {
  const data = useStaticQuery(query)

  const subTitle = data.allContentfulLandingContent.edges[0].node.subTitle

  const rawTitle = JSON.parse(
    data.allContentfulLandingContent.edges[0].node.title.raw
  )
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        function replacer(words: any) {
          const wordsList: string[] = []
          const colorsList: string[] = []
          words.split(',').forEach((wordColor: any) => {
            const list = wordColor.replace(/'/gi, '').split('=')
            wordsList.push(list[0])
            colorsList.push(list[1])
          })
          return <AnimatedWord words={wordsList} colors={colorsList} />
        }
        const [_, left, words, right] = children[0].match(/(.*)<(.*)>(.*)/)
        return (
          <>
            {left + ' '}
            {replacer(words)}
            {right}
            <br />
          </>
        )
      },
    },
  }

  const title = documentToReactComponents(rawTitle, options)

  return (
    <RSection cover={Cover} artifacts={Artifacts}>
      <div className={styles.wrapper}>
        <RSectionTitle>{title}</RSectionTitle>
        <PrimarySubtitle>{subTitle}</PrimarySubtitle>
      </div>
    </RSection>
  )
}

export const query = graphql`
  query LandingContentQuery {
    allContentfulLandingContent {
      edges {
        node {
          id
          title {
            raw
          }
          subTitle
          productsLabel
        }
      }
    }
  }
`
