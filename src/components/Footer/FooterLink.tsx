import React from 'react'

import footerLinkStyles from './FooterLink.module.css'

type Props = {
  text: string
  url: string
}

const FooterLink: React.FC<Props> = ({ text, url }) => {
  return (
    <a className={footerLinkStyles.link} href={url}>
      {text}
    </a>
  )
}

export default FooterLink
