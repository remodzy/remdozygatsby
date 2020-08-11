import React, { ReactElement } from 'react'
import { getColor } from '../../../../utils/colors'

type Props = {
  text: string
  color?: string
}

const styles = {
  root: {
    fontSize: 17,
    fontWeight: 600,
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
  },
}

export default function SectionLabel({
  text,
  color = 'success',
}: Props): ReactElement<any, any> {
  const labelColor = getColor({ group: 'main', color })
  return (
    <div
      style={{
        ...styles.root,
        color: labelColor.main,
      }}
    >
      {text}
    </div>
  )
}
