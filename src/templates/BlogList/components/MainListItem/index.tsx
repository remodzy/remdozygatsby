import { navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'

import LinkButton from '~components/LinkButton'
import { Article } from '~utils/mapArticles'

import * as styles from './MainListItem.module.css'

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
    {item.image.gatsbyImageData && (
      <GatsbyImage
        image={item.image.gatsbyImageData}
        alt=''
        style={imageStyle}
      />
    )}
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
