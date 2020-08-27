import React from 'react'
import { getTextColor } from '../../../../utils/colors'

const fontColors = getTextColor()

const styles = {
  root: {
    fontSize: 40,
    fontWeight: 600,
    color: fontColors.main,
    textAlign: 'center' as const,
  },
}

type Props = {
  text: string
}

export default function SectionTitle({ text }: Props) {
  return <div style={styles.root}>{text}</div>
}
