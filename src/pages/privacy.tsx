import { graphql, PageProps } from 'gatsby'
import React from 'react'
import RichTextLayout from '~templates/RichText'

const FormsPage: React.FC<PageProps> = ({ pageResources }) => {
  const { body, title } = pageResources.json.data.privacyPage
  return <RichTextLayout title={title} document={JSON.parse(body.body)} />
}

export default FormsPage

export const pageQuery = graphql`
  {
    privacyPage: contentfulInfoPages(title: { eq: "Privacy" }) {
      id
      title
      body {
        body
      }
    }
  }
`
