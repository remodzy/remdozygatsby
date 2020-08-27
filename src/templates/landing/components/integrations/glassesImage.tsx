import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function GlassesImage(): ReactElement<any, any> {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "landing/glasses-image.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 664) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{
        width: '100%',
        maxWidth: 664,
        marginTop: 119,
        marginBottom: 174,
      }}
    />
  )
}
