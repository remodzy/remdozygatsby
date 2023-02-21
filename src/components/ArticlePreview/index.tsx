import { navigate } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { injectIntl, Link } from 'gatsby-plugin-react-intl'
import React from 'react'
import { IntlShape } from 'react-intl/src/types'

import LinkButton from '~components/LinkButton'

import * as styles from './ArticlePreview.module.css'

type Props = {
  image?: IGatsbyImageData
  title: string
  text: string
  imageTitle: string
  imageTitleColor: string
  slug: string
  intl: IntlShape
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
  intl,
}) => (
  <div className={styles.root}>
    <Link to={`/blog/${slug}`}>
      {image && <GatsbyImage image={image} alt='' style={imageStyles} />}
    </Link>
    <div
      className={styles.imageTitle}
      style={{ color: imageTitleColor, marginTop: 24 }}
    >
      {imageTitle}
    </div>
    <div className={styles.title}>
      <Link to={`/blog/${slug}`} style={{ textDecoration: `none` }}>
        {title}
      </Link>
    </div>
    <div className={styles.text}>{text}</div>
    <div className={styles.linkContainer}>
      <LinkButton
        label={intl.formatMessage({ id: 'learn_more' })}
        handleClick={() => navigate(`/blog/${slug}`)}
      />
    </div>
  </div>
)

export default injectIntl(ArticlePreview)
