import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Benefits from './components/Benefits'
import FeatureBlock from './components/Features'

const Forms = (): ReactElement => (
  <>
    <FeatureBlock />
    <Benefits />
    <RBlog />
    {/*<Testimonials />*/}
  </>
)

export default Forms
