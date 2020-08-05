import React, { ReactElement } from 'react'
import { getColor } from '../../../../utils/colors'

type Props = {
  text: string
}

const labelColor = getColor({ group: 'main', color: 'success' })

const styles = {
  root: {
    fontSize: 17,
    fontWeight: 600,
    color: labelColor.main,
    textAlign: 'center' as const,
  },
}

export default function SectionLabel({ text }: Props): ReactElement<any, any> {
  return <div style={styles.root}>{text}</div>
}
