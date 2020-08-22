import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement
  color: string
}

const IconWrapper = ({ children, color }: Props): ReactElement => {
  const styles = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 10,
      backgroundColor: color,
    },
  }
  return <div style={styles.root}>{children}</div>
}

export default IconWrapper
