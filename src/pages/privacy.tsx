import { graphql, PageProps } from 'gatsby'
import React from 'react'
import RichTextLayout from '~templates/RichText'

const PrivacyPage: React.FC<PageProps> = ({ pageResources }) => {
  const { body, title } = (pageResources?.json.data as {
    privacyPage?: any
  })?.privacyPage || { body: '', title: '' }
  return (
    <RichTextLayout title={title} document={JSON.parse(body.body || '{}')} />
  )
}

export default PrivacyPage

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
