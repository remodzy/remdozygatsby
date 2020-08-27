import React, { ReactElement } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import BlockWrapper from '~components/blockWrapper'
import InfoBlock from './InfoBlock'
import { ListItem } from './ServiceList'

const rowStyles = {
  root: {
    display: 'flex',
  },
}

type ImageProps = {
  image: FluidObject
  size: number
}

const Image = ({ image, size }: ImageProps) => (
  <Img fluid={image} style={{ maxWidth: size, width: '100%' }} />
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
      style={{
        ...rowStyles.root,
        paddingTop: item.paddingTop || 0,
        position: 'relative',
      }}
    >
      <BlockWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: !isEven ? 'flex-end' : 'flex-start',
            paddingRight: item.paddingRight || 0,
            paddingLeft: item.paddingLeft || 0,
          }}
        >
          {!isEven && [
            <InfoBlock
              isEven={false}
              item={item}
              icon={images[`${item.key}Icon`].childImageSharp.fixed}
            />,
            <Image
              image={images[item.key].childImageSharp.fluid}
              size={item.imageSize}
            />,
          ]}
          {isEven && [
            <Image
              image={images[item.key].childImageSharp.fluid}
              size={item.imageSize}
            />,
            <InfoBlock
              isEven
              item={item}
              icon={images[`${item.key}Icon`].childImageSharp.fixed}
            />,
          ]}
          <item.InArtifacts />
        </div>
      </BlockWrapper>
      <item.OutArtifacts />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 477,
          zIndex: -1,
          background:
            'linear-gradient(102.33deg, rgba(246, 249, 251, 0) 4.99%, rgba(245, 248, 251, 0.21) 62.88%, #F5F8FB 98.08%) ',
          transform: isEven ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
        }}
      ></div>
    </div>
  )
}
