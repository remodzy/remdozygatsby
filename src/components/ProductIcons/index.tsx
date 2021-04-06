import React, { ReactElement } from 'react'

import * as styles from './styles.module.css'

export type ContentfulAssetIcon = {
  title: string
  file: {
    contentType: string
    url: string
  }
}

type Props = {
  children: ReactElement
  isLarge: boolean
  isMobile: boolean
}

export function IconWrapper({
  children,
  isLarge = true,
  isMobile = false,
}: Props): ReactElement {
  const className = isLarge ? styles.lg : styles.md
  return (
    <div className={`${className} ${isMobile ? styles.mobile : ''}`}>
      {children}
    </div>
  )
}
