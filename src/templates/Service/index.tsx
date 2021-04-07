import React, { ReactElement } from 'react'

import PrimaryContent from '~components/PrimaryContent'
import BlogBlock from '~components/RBlog'

// import TestimonialsBlock from '~components/Testimonials'
import BenefitsBlock from './components/Benefits'
import KeyFeatures from './components/KeyFeatures'
import Artifacts from './components/PrimaryContent/Artifacts'

const PrimaryImage = () => (
  <picture>
    <source
      srcSet='/images/service/m-service-primary.png'
      media='(max-width: 768px)'
    />
    <img src='/images/service/service-primary.png' alt='' />
  </picture>
)

const Service = (): ReactElement => (
  <div>
    <PrimaryContent
      title={
        <>
          Field service
          <br />
          management software
        </>
      }
      subTitle='With roxServices from Roxabo, you can schedule and manage jobs, dispatch them to field technicians,and provide ETAs to customers with notifications.'
      image={PrimaryImage}
      artifacts={Artifacts}
      comingSoon
    />
    <KeyFeatures />
    <BenefitsBlock />
    <BlogBlock />
    {/*<TestimonialsBlock />*/}
  </div>
)

export default Service
