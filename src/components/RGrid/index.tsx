import { Document } from '@contentful/rich-text-types'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FC, ReactElement } from 'react'

import GridRow from '~components/GridRow'
import InfoBlock from '~components/InfoBlock'
import RSectionTitle from '~components/RSectionTitle'

import * as styles from './RGrid.module.css'

export type ListItem = {
  key?: string
  label?: Document | string
  colors: {
    background: string
    text: string
  }
  link: string
  title: Document | string
  text: Document | string
  icon: FC<unknown>
  image?: IGatsbyImageData
  learnMoreText?: string
  extraItem?: FC<unknown>
  align?: 'left' | 'right'
}

type Props = {
  items: ListItem[]
  title?: string
}

const RGrid: FC<Props> = ({ items, title }): ReactElement => {
  return (
    <>
      {title && <RSectionTitle>{title}</RSectionTitle>}
      <div className={styles.root}>
        {items.map(
          (
            { key, align, colors, label, link, title, text, icon: Icon, image },
            index
          ) => (
            <GridRow key={key || index} align={align}>
              <InfoBlock
                colors={colors}
                label={label}
                link={link}
                title={title}
                text={text}
                icon={Icon}
              />
              <div className={styles.imageWrapper}>
                {image && <GatsbyImage image={image} alt='' />}
              </div>
            </GridRow>
          )
        )}
      </div>
    </>
  )
}

export default RGrid
