import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import itemStyles from './Item.module.css'

type Props = {
  image: () => React.ReactElement
  text: string
}

export function Item({ image: Image, text }: Props) {
  return (
    <div className={itemStyles.root}>
      <Image />
      <div className={itemStyles.text}>{text}</div>
    </div>
  )
}
