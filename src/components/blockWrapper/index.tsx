import React, { ReactElement } from 'react'

const styles = {
  root: {
    width: '100%',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: 1600,
    position: 'relative' as const,
  },
}

type Props = {
  children: ReactElement | ReactElement[]
  styleWrapper?: React.CSSProperties
}

export default function BlockWrapper({ children, styleWrapper = {} }: Props) {
  return (
    <div style={styles.root}>
      <div style={{ ...styles.wrapper, ...styleWrapper }}>{children}</div>
    </div>
  )
}
