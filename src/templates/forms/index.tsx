import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { useDeviceDetect } from '~utils/hooks'
import Blog from '~templates/shared/Blog'
import Integrations from '~templates/shared/Integrations'
import PrimaryContent from '~templates/shared/PrimaryContent'
import Testimonials from '~templates/shared/Testimonials'

import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import FormsBlock from './components/Forms'

export default function Forms() {
  const { isMobile } = useDeviceDetect()
  const { desktop, mobile } = useStaticQuery(query)
  const image = isMobile ? mobile : desktop

  return (
    <>
      <PrimaryContent
        title='Build checklists, conduct inspections, file reports'
        subTitle='Remodzy Forms by Remodzy is an inspection app now used  50,000 times a day in over 80 countries'
        image={image?.childImageSharp?.fluid}
      />
      <FormsBlock />
      <Integrations />
      <HowItWorks />
      <Benefits />
      <Blog />
      <Testimonials />
    </>
  )
}

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "forms/primary-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1427) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mobile: file(relativePath: { eq: "forms/primary-image-m.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
