import React from 'react'

import BlueBlock from '~templates/shared/BlueBlock'
import Blog from '~templates/shared/Blog'
import Integrations from '~templates/shared/Integrations'
import Testimonials from '~templates/shared/Testimonials'

import PrimaryBlock from './components/primaryBlock'
import Service from './components/service'
import HowItWorks from './components/howItWorks'
import Benefits from './components/benefits'

const Landing = () => (
  <div>
    <PrimaryBlock />
    <Service />
    <Integrations />
    <HowItWorks />
    <Benefits />
    <Blog />
    <Testimonials />
    <BlueBlock />
  </div>
)

export default Landing
