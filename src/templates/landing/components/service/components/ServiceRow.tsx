import React, { ReactElement } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import BlockWrapper from '~components/blockWrapper'
import InfoBlock from './InfoBlock'
import { ListItem } from './ServiceList'
import serviceRowStyles from './ServiceRow.module.css'

type ImageProps = {
  image: FluidObject
  size: number
}

const Image = ({ image, size }: ImageProps) => (
  <Img fluid={image} style={{ width: '100%' }} />
)

type Props = {
  images: any
  item: ListItem
  index: number
}

export default function ServiceRow({
  images,
  item,
  index,
}: Props): ReactElement<any, any> {
  const isEven = (index + 1) % 2 === 0

  return (
    <div
      key={item.key}
      className={serviceRowStyles.root}
      style={{
        paddingTop: item.paddingTop || 0,
      }}
    >
      <BlockWrapper
        styleWrapper={{
          display: 'flex',
          justifyContent: !isEven ? 'flex-end' : 'flex-start',
          paddingRight: item.paddingRight || 0,
          paddingLeft: item.paddingLeft || 0,
        }}
      >
        {!isEven ? (
          <>
            <InfoBlock
              isEven={false}
              item={item}
              icon={images[`${item.key}Icon`].childImageSharp.fixed}
            />
            <Image
              image={images[item.key].childImageSharp.fluid}
              size={item.imageSize}
            />
          </>
        ) : (
          <>
            <Image
              image={images[item.key].childImageSharp.fluid}
              size={item.imageSize}
            />
            <InfoBlock
              isEven
              item={item}
              icon={images[`${item.key}Icon`].childImageSharp.fixed}
            />
          </>
        )}
        <item.InArtifacts />
      </BlockWrapper>
      <item.OutArtifacts />
      <div
        className={serviceRowStyles.backgroundCover}
        style={{
          transform: isEven ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
        }}
      ></div>
    </div>
  )
}
