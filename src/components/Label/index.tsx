import React from 'react'

import labelStyles from './Label.module.css'

type Props = {
  text: string
}

const Label: React.FC<Props> = ({ text }) => (
  <span className={labelStyles.root}>{text}</span>
)

export default Label
