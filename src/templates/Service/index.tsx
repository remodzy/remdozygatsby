import React, { ReactElement } from 'react'

import BlogBlock from '~components/Blog'
import BlueBlock from '~components/BlueBlock'
import IntegrationsBlock from '~components/Integrations'
import TestimonialsBlock from '~components/Testimonials'

import BenefitsBlock from './components/Benefits'
import HowItWorksBlock from './components/HowItWorks'
import PrimaryContent from './components/PrimaryContent'
import ServiceBlock from './components/KeyFeatures'

const Service = (): ReactElement => (
  <div>
    <PrimaryContent />
    <ServiceBlock />
    <BenefitsBlock />
    <BlogBlock />
    <TestimonialsBlock />
  </div>
)

export default Service
