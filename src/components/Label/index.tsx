import React from 'react'

const styles = {
  root: {
    fontSize: 12,
    lineHeight: '16px',
    color: '#A9B2BB',
  },
}

type Props = {
  text: string
}

export default function Label({ text }: Props) {
  return <span style={styles.root}>{text}</span>
}
