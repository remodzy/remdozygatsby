import React from 'react'
import Img from 'gatsby-image'

import LinkButton from '~components/linkButton'
import resourceItemStyles from './ResourceItem.module.css'

type Props = {
  image?: any
  title: string
  text: string
  imageTitle: string
  imageTitleColor: string
}

type ImageStyles = {
  width: string
  maxWidth?: string
  filter: string
}
const imageStyles: ImageStyles = {
  width: '100%',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
}

const ResourceItem: React.FC<Props> = ({
  image,
  title,
  text,
  imageTitle,
  imageTitleColor,
}) => (
  <div className={resourceItemStyles.root}>
    <Img fluid={image} style={imageStyles} loading='eager' />
    <div
      className={resourceItemStyles.imageTitle}
      style={{ color: imageTitleColor, marginTop: 24 }}
    >
      {imageTitle}
    </div>
    <div className={resourceItemStyles.title}>{title}</div>
    <div className={resourceItemStyles.text}>{text}</div>
    <div className={resourceItemStyles.linkContainer}>
      <LinkButton label='Learn More' handleClick={() => {}} />
    </div>
  </div>
)

export default ResourceItem
