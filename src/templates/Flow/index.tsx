import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'
import Testimonials from '~components/Testimonials'

import Benefits from './components/Benefits'
import Apps from './components/Apps'
import PrimaryContent from './components/PrimaryContent'

export default function Flow(): ReactElement {
  return (
    <>
      <PrimaryContent />
      <Benefits />
      <Apps />
      <RBlog />
      {/*<Testimonials />*/}
    </>
  )
}
