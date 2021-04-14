import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Apps from './components/Apps'

const Flow = (): ReactElement => (
  <>
    <Apps />
    <RBlog />
    {/*<Testimonials />*/}
  </>
)

export default Flow
