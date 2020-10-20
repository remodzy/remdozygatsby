import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'

import { Article } from '~utils/mapArticles'
import LinkButton from '~components/LinkButton'
import styles from './MainListItem.module.css'

type Props = {
  item: Article
}

const imageStyle = {
  width: '100%',
  filter: 'drop-shadow(22px 26px 80px rgba(153, 174, 186, 0.25))',
  borderRadius: 12,
  marginRight: 56,
  flex: 0.63,
}

const MainListItem: React.FC<Props> = ({ item }) => (
  <div className={styles.root}>
    <Img
      fluid={item.image.fluid}
      style={imageStyle}
      loading='eager'
      alt={item.image.alt}
    />
    <div className={styles.infoContainer}>
      <div className={styles.imageTitle} style={{ color: 'blue' }}>
        {item.image.imageTitle}
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.linkContainer}>
        <LinkButton
          label='Learn More'
          handleClick={() => navigate(`/blog/${item.slug}`)}
        />
      </div>
    </div>
  </div>
)

export default MainListItem
