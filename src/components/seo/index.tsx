import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  description?: string
  image?: string
  article?: boolean
}

export default function SEO({ title, description, image, article }: Props) {
  const { pathname } = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const seo = {
    title: title || siteMetadata.defaultTitle,
    description: description || siteMetadata.defaultDescription,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.defaultImage}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
  }

  return (
    <Helmet defaultTitle={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta
        http-equiv='Accept-CH'
        content='DPR, Width, Viewport-Width, Downlink'
      />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {(siteMetadata.article ? true : null) && (
        <meta property='og:type' content='article' />
      )}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />
      {siteMetadata.twitterUsername && (
        <meta name='twitter:creator' content={siteMetadata.twitterUsername} />
      )}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
    </Helmet>
  )
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        siteUrl
        defaultImage
        twitterUsername
      }
    }
  }
`
