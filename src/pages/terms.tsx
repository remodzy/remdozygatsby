import { graphql, PageProps } from 'gatsby'
import React from 'react'
import RichTextLayout from '~templates/RichText'

const TermsPage: React.FC<PageProps> = ({ pageResources }) => {
  const { body, title } = (pageResources?.json.data as {
    termsPage?: any
  })?.termsPage || { body: '', title: '' }
  return (
    <RichTextLayout title={title} document={JSON.parse(body.body || '{}')} />
  )
}

export default TermsPage

export const pageQuery = graphql`
  {
    termsPage: contentfulInfoPages(title: { eq: "Terms" }) {
      id
      title
      body {
        body
      }
    }
  }
`
