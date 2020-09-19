import React, { ReactElement, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { DeviceDetectContext } from '~components/layout'
import PrimaryContent from '~templates/shared/PrimaryContent'

export default function PrimaryBlock(): ReactElement<any, any> {
  const { isMobile } = useContext(DeviceDetectContext)
  const { desktop, mobile } = useStaticQuery(query)
  const image = isMobile ? mobile : desktop

  return (
    <PrimaryContent
      title='Field service management software'
      subTitle='With Remodzy Services from Remodzy,<br> you can schedule and manage jobs, dispatch them to field technicians, and provide ETAs to customers with notifications.'
      image={image?.childImageSharp?.fluid}
    />
  )
}

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "service/primary-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1290) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mobile: file(relativePath: { eq: "service/primary-image-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
