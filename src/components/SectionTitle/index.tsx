import React, { ReactElement } from 'react'

import * as styles from './SectionTitle.module.css'

type Props = {
  text: string
}

export default function SectionTitle({ text }: Props): ReactElement {
  return <div className={styles.root}>{text}</div>
}
