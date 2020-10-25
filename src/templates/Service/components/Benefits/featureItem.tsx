import React, { ReactElement } from 'react'
import Img from 'gatsby-image'

import IconWrapper from '../Service/components/IconWrapper'
import featureItemStyles from './FeatureItem.module.css'

type ItemProps = {
  title: string
  text: string
  image: any
}

export function FeatureItem({
  title,
  text,
  image,
}: ItemProps): ReactElement<any, any> {
  return (
    <div>
      <IconWrapper color='hsla(226, 74%, 59%, 0.2)'>
        <Img fixed={image} alt={title} loading='eager' />
      </IconWrapper>
      <div className={featureItemStyles.title}>{title}</div>
      <div className={featureItemStyles.text}>{text}</div>
    </div>
  )
}
