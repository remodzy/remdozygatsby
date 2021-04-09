import { graphql } from 'gatsby'
import React from 'react'

import Layout from '~components/Layout'
import LandingTemplate from '~templates/Landing'

export default function IndexPage() {
  return (
    <Layout>
      <LandingTemplate />
    </Layout>
  )
}

export const pageQuery = graphql`
  fragment Article on ContentfulBlogPost {
    createdAt
    description {
      description
    }
    image: heroImage {
      gatsbyImageData(layout: CONSTRAINED, quality: 98, placeholder: TRACED_SVG)
      alt: description
      imageTitle: title
    }
    id
    slug
    title
  }
`
