import { graphql, navigate, useStaticQuery } from 'gatsby'
import React, { ReactElement, useCallback } from 'react'

import PrimaryContent from '~components/PrimaryContent'

import Artifacts from './components/PrimaryContent/Artifacts'

export default function Forms(): ReactElement {
  const data = useStaticQuery(query)
  const page = data.allContentfulNotFoundPage?.edges[0].node

  const handleClick = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <>
      <PrimaryContent
        title={page.title}
        subTitle={page.subTitle}
        handleClick={handleClick}
        artifacts={Artifacts}
        buttonLabel={page.buttonText}
        buttonColors={{
          border: '#4864eb',
          text: '#4864eb',
          background: '#ffffff',
        }}
        creditCardInfo={false}
        doubleButtonMargins
      />
    </>
  )
}

export const query = graphql`
  query allContentfulNotFoundQuery {
    allContentfulNotFoundPage {
      edges {
        node {
          title
          subTitle
          buttonText
        }
      }
    }
  }
`
