import React, { ReactElement, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { DeviceDetectContext } from '~components/layout'

export default function GlassesImage(): ReactElement<any, any> {
  const { isMobile } = useContext(DeviceDetectContext)
  const data = useStaticQuery(query)

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{
        width: '100%',
        marginTop: isMobile ? 90 : 119,
        marginBottom: isMobile ? 100 : 174,
      }}
    />
  )
}

const query = graphql`
  query {
    file(relativePath: { eq: "landing/glasses-image.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 664) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
