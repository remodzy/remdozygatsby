import React from 'react'
import PrimaryBlock from './components/primaryBlock'
import Service from './components/service'
import Integrations from './components/integrations'
import HowItWorks from './components/howItWorks'
import Benefits from './components/benefits'
import Blog from './components/blog'
import Testimonials from './components/testimonials'
import BlueBlock from './components/blueBlock'

const styles = {
  root: {},
}

export default function Landing() {
  return (
    <div style={styles.root}>
      <PrimaryBlock />
      {/* <Service /> */}
      <Integrations />
      <HowItWorks />
      <Benefits />
      <Blog />
      <Testimonials />
      <BlueBlock />
    </div>
  )
}
