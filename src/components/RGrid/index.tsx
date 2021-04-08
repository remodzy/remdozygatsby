import { Document } from '@contentful/rich-text-types'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FC, ReactElement } from 'react'

import GridRow from '~components/GridRow'
import InfoBlock from '~components/InfoBlock'
import RSectionTitle from '~components/RSectionTitle'
import { useDeviceDetect } from '~utils/hooks'

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
  images?: {
    desktop: string
    mobile: string
  }
  learnMoreText?: string
  extraItem?: FC<unknown>
}

type Props = {
  items: ListItem[]
  title?: string
}

const RGrid: FC<Props> = ({ items, title }): ReactElement => {
  const { isMobile } = useDeviceDetect()

  return (
    <>
      {title && <RSectionTitle>{title}</RSectionTitle>}
      <div className={styles.root}>
        {items.map(
          (
            {
              key,
              colors,
              label,
              link,
              title,
              text,
              icon: Icon,
              image,
              images,
            },
            index
          ) => (
            <GridRow key={key || index}>
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
                {images && (
                  <img
                    src={isMobile ? images?.mobile : images?.desktop}
                    width={100}
                    height={100}
                    alt=''
                  />
                )}
              </div>
            </GridRow>
          )
        )}
      </div>
    </>
  )
}

export default RGrid
