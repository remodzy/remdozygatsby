import React, { ReactElement } from 'react'

import PrimaryContent from '~components/PrimaryContent'
import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Apps from './components/Apps'
import Benefits from './components/Benefits'
import Artifacts from './components/PrimaryContent/Artifacts'

const PrimaryImage = () => (
  <picture>
    <source
      srcSet='/images/flow/m-flow-primary.png'
      media='(max-width: 768px)'
    />
    <img src='/images/flow/flow-primary.png' alt='' />
  </picture>
)

export default function Flow(): ReactElement {
  return (
    <>
      <PrimaryContent
        title={
          <>
            Tie your apps together,
            <br />
            Set yourself free.
          </>
        }
        subTitle='Automate business workflows by connecting your apps with roxFlow. Build smart integrations to break the information silos in your business.'
        image={PrimaryImage}
        artifacts={Artifacts}
        comingSoon
        hasCover
      />
      <Benefits />
      <Apps />
      <RBlog />
      {/*<Testimonials />*/}
    </>
  )
}
