import { graphql } from 'gatsby'
import React from 'react'

import Layout from '~components/Layout'
import Flow from '~templates/Flow'

export default function FormsPage() {
  return (
    <Layout>
      <Flow />
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
      gatsbyImageData(layout: CONSTRAINED, quality: 92)
      alt: description
      imageTitle: title
    }
    id
    slug
    title
  }
`
