import React, { ReactElement, useContext } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import BlockWrapper from '~components/blockWrapper'
import InfoBlock from './InfoBlock'
import { ListItem } from './ServiceList'
import serviceRowStyles from './ServiceRow.module.css'
import { DeviceDetectContext } from '~components/layout'

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
  const { isMobile } = useContext(DeviceDetectContext)
  const isEven = (index + 1) % 2 === 0

  return (
    <div
      key={item.key}
      className={serviceRowStyles.root}
      style={{
        paddingTop: isMobile ? 54 : item.paddingTop || 0,
      }}
    >
      <BlockWrapper>
        <div className={serviceRowStyles.container}>
          {!isEven && !isMobile ? (
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
        </div>
        {isMobile ? <item.InMobileArtifacts /> : <item.InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <item.OutMobileArtifacts /> : <item.OutDesktopArtifacts />}
      <div
        className={serviceRowStyles.backgroundCover}
        style={{
          transform: isEven || isMobile ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
        }}
      ></div>
    </div>
  )
}
