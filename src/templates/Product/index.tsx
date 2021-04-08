import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import React, { ReactElement } from 'react'

import Layout from '~components/Layout'
import PrimaryContent from '~components/PrimaryContent'
import { useDeviceDetect } from '~utils/hooks'
import { prepareProduct, ProductNode } from '~utils/mapProducts'

// import Testimonials from '~components/Testimonials'
import Artifacts from './components/PrimaryContent/Artifacts'
import Flow from './Flow'
import Forms from './Forms'
import Service from './Service'

//TODO: use React.lazy or something? SSR not yet supported, can go without it?
const views: {
  [key: string]: () => ReactElement
} = {
  roxFlow: Flow,
  roxForms: Forms,
  roxService: Service,
}

type Props = {
  pageResources: ContextPageResource
}

type ContextPageResource = {
  json: {
    data: {
      contentfulProducts: ProductNode
    }
  }
}

export default function BlogList({ pageResources }: Props): ReactElement {
  const { isMobile } = useDeviceDetect()
  if (!pageResources?.json?.data.contentfulProducts) return <></>

  const product = prepareProduct(
    pageResources?.json?.data.contentfulProducts,
    isMobile
  )
  const View = views[product.key]

  return (
    <Layout>
      <PrimaryContent
        title={
          typeof product.title === 'string'
            ? product.title
            : documentToReactComponents(product.title)
        }
        subTitle={
          typeof product.text === 'string'
            ? product.text
            : documentToReactComponents(product.text)
        }
        image={product.image}
        artifacts={Artifacts}
        comingSoon={product.comingSoon}
        hasCover={product.hasCover}
        doubleButtonMargins={!product.comingSoon}
      />
      {View && <View />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query contentfulProductsQuery($id: String) {
    contentfulProducts(id: { eq: $id }) {
      id
      name
      order
      align
      extra
      comingSoon
      hasCover
      productName {
        productName: raw
      }
      subtitle1 {
        subtitle1: raw
      }
      subtitle2 {
        subtitle2: raw
      }
      learnMoreButton
      productIcon {
        title
        file {
          contentType
          url
        }
      }
      mainImage {
        title
        desktop: gatsbyImageData(layout: CONSTRAINED, quality: 98)
        mobile: gatsbyImageData(layout: CONSTRAINED, width: 400, quality: 80)
      }
      sections {
        id
      }
    }
  }
`
