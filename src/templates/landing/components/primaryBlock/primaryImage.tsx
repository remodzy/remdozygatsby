import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function PrimaryImage(): ReactElement<any, any> {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "landing/primary-image.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 1290) {
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
      style={{ width: '100%', maxWidth: 1290 }}
    />
  )
}
