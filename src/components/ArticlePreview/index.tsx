import { Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

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
    <Link to={`/blog/${slug}`}>
      <Img fluid={image} style={imageStyles} loading='eager' />
    </Link>
    <div
      className={articlePreviewStyles.imageTitle}
      style={{ color: imageTitleColor, marginTop: 24 }}
    >
      {imageTitle}
    </div>
    <div className={articlePreviewStyles.title}>
      <Link to={`/blog/${slug}`} style={{ textDecoration: `none` }}>
        {title}
      </Link>
    </div>
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
