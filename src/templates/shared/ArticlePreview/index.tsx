import React from 'react'
import Img from 'gatsby-image'
import { navigate } from 'gatsby'

import LinkButton from '~components/LinkButton'
import articlePreviewStyles from './ArticlePreview.module.css'

type Props = {
  image?: any
  title: string
  text: string
  imageTitle: string
  imageTitleColor: string
  slug: string
}

type ImageStyles = {
  width: string
  maxWidth?: number
  filter: string
  borderRadius: number
}
const imageStyles: ImageStyles = {
  width: '100%',
  borderRadius: 12,
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
}

const ArticlePreview: React.FC<Props> = ({
  image,
  title,
  text,
  imageTitle,
  imageTitleColor,
  slug,
}) => (
  <div className={articlePreviewStyles.root}>
    <Img fluid={image} style={imageStyles} loading='eager' />
    <div
      className={articlePreviewStyles.imageTitle}
      style={{ color: imageTitleColor, marginTop: 24 }}
    >
      {imageTitle}
    </div>
    <div className={articlePreviewStyles.title}>{title}</div>
    <div className={articlePreviewStyles.text}>{text}</div>
    <div className={articlePreviewStyles.linkContainer}>
      <LinkButton
        label='Learn More'
        handleClick={() => navigate(`/blog/${slug}`)}
      />
    </div>
  </div>
)

export default ArticlePreview
