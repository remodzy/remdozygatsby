import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import itemStyles from './Item.module.css'

type Props = {
  image: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  text: string
  size: number
}

export function Item({ image, text, size }: Props) {
  return (
    <div className={itemStyles.root}>
      <Img
        fluid={image.childImageSharp.fluid}
        style={{ width: '100%', maxWidth: size }}
      />
      <div className={itemStyles.text}>{text}</div>
    </div>
  )
}
