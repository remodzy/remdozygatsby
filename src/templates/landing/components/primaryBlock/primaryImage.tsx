import React, { ReactElement, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { DeviceDetectContext } from '~components/layout'

export default function PrimaryImage(): ReactElement<any, any> {
  const { isMobile } = useContext(DeviceDetectContext)
  const { desktop, mobile } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "landing/primary-image.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 1290) {
              ...GatsbyImageSharpFluid_noBase64
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        mobile: file(relativePath: { eq: "landing/primary-image-mobile.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_noBase64
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    `
  )

  const image = isMobile ? mobile : desktop

  return <Img fluid={image.childImageSharp.fluid} style={{ width: '100%' }} />
}
