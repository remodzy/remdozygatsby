import React from 'react'

const styles = {
  root: {
    fontSize: 12,
    lineHeight: '16px',
    color: '#A9B2BB',
  },
}

export default function Label({ text }) {
  return <span style={styles.root}>{text}</span>
}
