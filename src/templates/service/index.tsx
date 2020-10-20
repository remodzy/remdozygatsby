import React from 'react'

import BlueBlock from '~components/BlueBlock'
import BlogBlock from '~templates/shared/Blog'
import IntegrationsBlock from '~templates/shared/Integrations'
import TestimonialsBlock from '~templates/shared/Testimonials'

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
