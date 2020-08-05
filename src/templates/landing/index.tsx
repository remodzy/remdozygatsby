import React from 'react'
import PrimaryBlock from './components/primaryBlock'
import Service from './components/service'

const styles = {
  root: {},
}

export default function Landing() {
  return (
    <div style={styles.root}>
      <PrimaryBlock />
      <Service />
    </div>
  )
}
