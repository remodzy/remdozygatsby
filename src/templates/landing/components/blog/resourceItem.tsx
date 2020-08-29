import React, { ReactElement } from 'react'
import Img from 'gatsby-image'

import { getTextColor } from '../../../../utils/colors'
import LinkButton from '../../../../components/linkButton'
import resourceItemStyles from './ResourceItem.module.css'

type Props = {
  image?: any
  title: string
  text: string
  imageTitle: string
  imageTitleColor: string
}

const textColors = getTextColor()

export default function ResourceItem({
  image,
  title,
  text,
  imageTitle,
  imageTitleColor,
}: Props): ReactElement<any, any> {
  return (
    <div className={resourceItemStyles.root}>
      <Img
        fluid={image}
        style={{
          width: '100%',
          filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
        }}
      />
      <div style={{ color: imageTitleColor, marginTop: 24 }}>{imageTitle}</div>
      <div className={resourceItemStyles.title}>{title}</div>
      <div className={resourceItemStyles.text}>{text}</div>
      <div className={resourceItemStyles.linkContainer}>
        <LinkButton label='Learn More' handleClick={() => {}} />
      </div>
    </div>
  )
}
