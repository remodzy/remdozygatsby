import React from 'react'
import PrimaryBlock from './components/primaryBlock'
import Service from './components/service'
import Integrations from './components/integrations'
import HowItWorks from './components/howItWorks'
import Benefits from './components/benefits'
import Blog from './components/blog'

const styles = {
  root: {},
}

export default function Landing() {
  return (
    <div style={styles.root}>
      <PrimaryBlock />
      <Service />
      <Integrations />
      <HowItWorks />
      <Benefits />
      <Blog />
    </div>
  )
}
