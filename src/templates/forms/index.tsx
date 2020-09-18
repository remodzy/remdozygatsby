import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'

import { DeviceDetectContext } from '~components/layout'
import Blog from '~templates/shared/Blog'
import BlueBlock from '~templates/shared/BlueBlock'
import Integrations from '~templates/shared/Integrations'
import PrimaryContent from '~templates/shared/PrimaryContent'
import Testimonials from '~templates/shared/Testimonials'

import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'

export default function Forms() {
  const { isMobile } = useContext(DeviceDetectContext)
  const { desktop, mobile } = useStaticQuery(query)
  const image = isMobile ? mobile : desktop

  return (
    <>
      <PrimaryContent
        title='Build checklists, conduct inspections, file reports'
        subTitle='Remodzy Forms by Remodzy is an inspection app now used  50,000 times a day in over 80 countries'
        image={image?.childImageSharp?.fluid}
      />
      <Integrations />
      <HowItWorks />
      <Benefits />
      <Blog />
      <Testimonials />
      <BlueBlock />
    </>
  )
}

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "forms/primary-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1290) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mobile: file(relativePath: { eq: "forms/primary-image-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
