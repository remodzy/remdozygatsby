import React, { ReactElement } from 'react'

import BlogBlock from '~components/RBlog'
import TestimonialsBlock from '~components/Testimonials'

import BenefitsBlock from './components/Benefits'
import KeyFeatures from './components/KeyFeatures'
import PrimaryContent from './components/PrimaryContent'

const Service = (): ReactElement => (
  <div>
    <PrimaryContent />
    <KeyFeatures />
    <BenefitsBlock />
    <BlogBlock />
    <TestimonialsBlock />
  </div>
)

export default Service
