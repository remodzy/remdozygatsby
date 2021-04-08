import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Benefits from './components/Benefits'

const Forms = (): ReactElement => (
  <>
    <Benefits />
    <RBlog />
    {/*<Testimonials />*/}
  </>
)

export default Forms
