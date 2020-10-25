import React from 'react'

import BlueBlock from '~components/BlueBlock'
import BlogBlock from '~components/Blog'
import IntegrationsBlock from '~components/Integrations'
import TestimonialsBlock from '~components/Testimonials'

import PrimaryBlock from './components/PrimaryBlock'
import ServiceBlock from './components/Service'
import HowItWorksBlock from './components/HowItWorks'
import BenefitsBlock from './components/Benefits'

const Service = () => (
  <div>
    <PrimaryBlock />
    <ServiceBlock />
    <IntegrationsBlock />
    <HowItWorksBlock />
    <BenefitsBlock />
    <BlogBlock />
    <TestimonialsBlock />
    <BlueBlock />
  </div>
)

export default Service
