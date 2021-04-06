import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

import { useDeviceDetect } from '~utils/hooks'

export default function GlassesImage() {
  const { isMobile } = useDeviceDetect()
  const data = useStaticQuery(query)

  const image = getImage(data.file)

  return (
    image && (
      <GatsbyImage
        image={image}
        alt=''
        style={{
          width: '100%',
          marginTop: isMobile ? 90 : 119,
          marginBottom: isMobile ? 100 : 174,
        }}
      />
    )
  )
}

const query = graphql`
  query {
    file(relativePath: { eq: "shared/glasses-image.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
