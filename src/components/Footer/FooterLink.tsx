import { Link } from 'gatsby'
import * as React from 'react'

import * as styles from './FooterLink.module.css'

type Props = {
  text: string
  url: string
}

const FooterLink: React.FC<Props> = ({ text, url }) => {
  const isLocal = /^\/(?!\/)/.test(url)

  return (
    <Link
      className={styles.link}
      to={url}
      {...(!isLocal
        ? {
            target: '_blank',
            rel: 'noreferrer',
          }
        : {})}
    >
      {text}
    </Link>
  )
}

export default FooterLink
