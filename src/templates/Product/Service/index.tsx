import React, { ReactElement } from 'react'

import BlogBlock from '~components/RBlog'

// import TestimonialsBlock from '~components/Testimonials'
import BenefitsBlock from './components/Benefits'
import KeyFeatures from './components/KeyFeatures'

const Service = (): ReactElement => (
  <>
    <KeyFeatures />
    <BenefitsBlock />
    <BlogBlock />
    {/*<TestimonialsBlock />*/}
  </>
)

export default Service
