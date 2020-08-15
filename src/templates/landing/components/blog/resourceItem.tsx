import React, { ReactElement } from 'react'
import Img from 'gatsby-image'

import { getTextColor } from '../../../../utils/colors'
import LinkButton from '../../../../components/linkButton'

type Props = {
  image?: any
  title: string
  text: string
  imageTitle: string
  imageTitleColor: string
}

const textColors = getTextColor()
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    fontSize: 23,
    lineHeight: '31px',
    fontWeight: 600,
    color: textColors.main,
    marginTop: 34,
  },
  text: {
    fontSize: 15,
    lineHeight: '182.3%',
    fontWeight: 500,
    color: textColors.sub,
    marginTop: 16,
  },
  linkContainer: {
    marginTop: 34,
  },
  imageTitle: {
    marginTop: 24,
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '18px',
  },
}

export default function ResourceItem({
  image,
  title,
  text,
  imageTitle,
  imageTitleColor,
}: Props): ReactElement<any, any> {
  return (
    <div style={styles.root}>
      <Img
        fixed={image}
        style={{
          filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
        }}
      />
      <div style={{ color: imageTitleColor, marginTop: 24 }}>{imageTitle}</div>
      <div style={styles.title}>{title}</div>
      <div style={styles.text}>{text}</div>
      <div style={styles.linkContainer}>
        <LinkButton label='Learn More' handleClick={() => {}} />
      </div>
    </div>
  )
}
