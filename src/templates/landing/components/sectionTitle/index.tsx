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

export default function SectionTitle({ text }) {
  return <div style={styles.root}>{text}</div>
}
