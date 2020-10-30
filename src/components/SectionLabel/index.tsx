import React from 'react'
import { getColor } from '~utils/colors'
import sectionLabelStyles from './SectionLabel.module.css'

type Props = {
  text: string
  color?: string
}

export default function SectionLabel({ text, color = 'success' }: Props) {
  const labelColor = getColor({ group: 'main', color })
  return (
    <div className={sectionLabelStyles.root} style={{ color: labelColor.main }}>
      {text}
    </div>
  )
}
