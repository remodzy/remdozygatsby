import React, { ReactElement } from 'react'

import RBlog from '~components/RBlog'
import Testimonials from '~components/Testimonials'
import { useDeviceDetect } from '~utils/hooks'

import Benefits from './components/Benefits'
import FeatureBlock from './components/Features'
import PrimaryContent from './components/PrimaryContent'

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
  const { isMobile } = useDeviceDetect()
  const image = isMobile
    ? '/images/forms/m-forms-primary.png'
    : '/images/forms/forms-primary.png'

  return (
    <>
      <PrimaryContent
        title='Build checklists, conduct inspections, Communicate with your team'
        subTitle='RoxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries'
        image={PrimaryImage}
      />
      <FeatureBlock />
      <Benefits />
      <RBlog />
      <Testimonials />
    </>
  )
}
