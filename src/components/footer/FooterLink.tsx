import React from 'react'

import footerLinkStyles from './FooterLink.module.css'

type Props = {
  text: string
  url: string
}

export default function FooterLink({ text, url }: Props) {
  return (
    <a className={footerLinkStyles.link} href={url}>
      {text}
    </a>
  )
}
