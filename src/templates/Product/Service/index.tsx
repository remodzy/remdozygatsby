import React, { ReactElement } from 'react'

import BlogBlock from '~components/RBlog'

// import TestimonialsBlock from '~components/Testimonials'
import BenefitsBlock from './components/Benefits'

const Service = (): ReactElement => (
  <>
    <BenefitsBlock />
    <BlogBlock />
    {/*<TestimonialsBlock />*/}
  </>
)

export default Service
