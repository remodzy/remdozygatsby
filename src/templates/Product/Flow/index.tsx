import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Apps from './components/Apps'
import Benefits from './components/Benefits'

const Flow = (): ReactElement => (
  <>
    <Benefits />
    <Apps />
    <RBlog />
    {/*<Testimonials />*/}
  </>
)

export default Flow
