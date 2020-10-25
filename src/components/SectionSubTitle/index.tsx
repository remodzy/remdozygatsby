import React from 'react'

import styles from './SectionSubTitle.module.css'

type Props = {
  text: string
}

export default function SectionSubTitle({ text }: Props) {
  return <div className={styles.root}>{text}</div>
}
