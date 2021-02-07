import React, { ReactElement } from 'react'

import Blog from '~components/Blog'
import Testimonials from '~components/Testimonials'
import { useDeviceDetect } from '~utils/hooks'

import Benefits from './components/Benefits'
import FeatureBlock from './components/Features'
import PrimaryContent from './components/PrimaryContent'

export default function Forms(): ReactElement {
  const { isMobile } = useDeviceDetect()
  const image = isMobile
    ? '/images/forms/forms-primary.png'
    : '/images/forms/forms-primary.png'

  return (
    <>
      <PrimaryContent
        title='Build checklists,<br /> conduct inspections, file reports'
        subTitle='RoxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries'
        image={image}
      />
      <FeatureBlock />
      <Benefits />
      <Blog />
      <Testimonials />
    </>
  )
}
