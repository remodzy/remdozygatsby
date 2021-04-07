import React, { ReactElement } from 'react'

import PrimaryContent from '~components/PrimaryContent'
import RBlog from '~components/RBlog'

// import Testimonials from '~components/Testimonials'
import Benefits from './components/Benefits'
import FeatureBlock from './components/Features'
import Artifacts from './components/PrimaryContent/Artifacts'

const PrimaryImage = () => (
  <picture>
    <source
      srcSet='/images/forms/m-forms-primary.png'
      media='(max-width: 768px)'
    />
    <img src='/images/forms/forms-primary.png' alt='' />
  </picture>
)

export default function Forms(): ReactElement {
  return (
    <>
      <PrimaryContent
        title='Build checklists, conduct inspections, Communicate with your team'
        subTitle='RoxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries'
        image={PrimaryImage}
        artifacts={Artifacts}
        doubleButtonMargins
      />
      <FeatureBlock />
      <Benefits />
      <RBlog />
      {/*<Testimonials />*/}
    </>
  )
}
