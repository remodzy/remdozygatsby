import * as React from 'react'

import * as styles from './FooterLink.module.css'

type Props = {
  text: string
  url: string
}

const FooterLink: React.FC<Props> = ({ text, url }) => {
  const isLocal = /^\/(?!\/)/.test(url)

  return (
    <a
      className={styles.link}
      href={url}
      {...(!isLocal
        ? {
            target: '_blank',
            rel: 'noreferrer',
          }
        : {})}
    >
      {text}
    </a>
  )
}

export default FooterLink
