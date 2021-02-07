import React from 'react'

import BlogBlock from '~components/Blog'
import BlueBlock from '~components/BlueBlock'
import IntegrationsBlock from '~components/Integrations'
import TestimonialsBlock from '~components/Testimonials'

import BenefitsBlock from './components/Benefits'
import HowItWorksBlock from './components/HowItWorks'
import PrimaryBlock from './components/PrimaryBlock'
import ServiceBlock from './components/Service'

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
