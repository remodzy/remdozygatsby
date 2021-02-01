import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { useDeviceDetect } from '~utils/hooks'
import PrimaryContent from '~components/PrimaryContent'

export default function PrimaryBlock(): ReactElement {
  const { isMobile } = useDeviceDetect()
  const { desktop, mobile } = useStaticQuery(query)
  const image = isMobile ? mobile : desktop

  return (
    <PrimaryContent
      title='Field service management software'
      subTitle='With RoxService from Roxabo, you can schedule and manage jobs, dispatch them to field technicians, and provide ETAs to customers with notifications.'
      image={image?.childImageSharp?.fluid}
    />
  )
}

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "service/primary-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1450) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mobile: file(relativePath: { eq: "service/primary-image-m.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
