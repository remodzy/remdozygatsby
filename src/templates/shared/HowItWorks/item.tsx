import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import itemStyles from './Item.module.css'

type Props = {
  title?: string
  image: FluidObject
  text: string
  size: number
}

const Item: React.FC<Props> = ({ title, image, text, size }) => {
  return (
    <div className={itemStyles.root}>
      <div className={itemStyles.imageWrapper}>
        <Img fluid={image} style={{ width: '100%' }} />
      </div>
      <div className={itemStyles.title}>{title}</div>
      <div className={itemStyles.text}>{text}</div>
    </div>
  )
}

export default Item
