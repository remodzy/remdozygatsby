import React from 'react'

import * as styles from './Label.module.css'

type Props = {
  text: string
}

const Label: React.FC<Props> = ({ text }) => (
  <span className={styles.root}>{text}</span>
)

export default Label
