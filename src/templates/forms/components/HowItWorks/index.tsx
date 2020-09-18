import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import HowItWorks, { HowItWorksItem } from '~templates/shared/HowItWorks'

export default function HowItWorksWrapper() {
  const images = useStaticQuery(query)
  let list: HowItWorksItem[] = []
  if (images) {
    list = [
      {
        key: 'actions',
        image: images.first.childImageSharp.fluid,
        title: 'Actions',
        text:
          'Get eyes and ears on the ground at all times by empowering your team to run  issues into actions.',
        size: 259,
      },
      {
        key: 'team-management',
        image: images.second.childImageSharp.fluid,
        title: 'Team Management',
        text: 'Share inspections across teams with a single click.',
        size: 259,
      },
      {
        key: 'integrations',
        image: images.third.childImageSharp.fluid,
        title: 'Integrations',
        text:
          'Connect Remodzy Forms to business software system such as Tableau, Sharepoint, and more.',
        size: 259,
      },
    ]
  }
  return <HowItWorks title='How Remodzy Forms works' list={list} />
}

const query = graphql`
  query {
    first: file(relativePath: { eq: "forms/howitworks-actions.png" }) {
      childImageSharp {
        fluid(maxWidth: 239) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    second: file(relativePath: { eq: "forms/howitworks-team-management.png" }) {
      childImageSharp {
        fluid(maxWidth: 239) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    third: file(relativePath: { eq: "forms/howitworks-integrations.png" }) {
      childImageSharp {
        fluid(maxWidth: 239) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
