import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React, { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'
import SVG from 'react-inlinesvg'

import IconWrapper from '~components/IconWrapper'
import Layout from '~components/Layout'
import PrimaryContent from '~components/PrimaryContent'
import { ListItem } from '~components/RGrid'
import {
  ISectionsDictionary,
  prepareProduct,
  ProductNode,
} from '~utils/mapProducts'

import KeyFeatures from './components/KeyFeatures'
// import Testimonials from '~components/Testimonials'
import Artifacts from './components/PrimaryContent/Artifacts'
import Flow from './Flow'
import Forms from './Forms'
import { Artifacts as FormsArtifacts } from './Forms/components/Features/Artifacts'
import Service from './Service'
import { Artifacts as ServicesArtifacts } from './Service/components/KeyFeatures/Artifacts'

//TODO: use React.lazy or something? SSR not yet supported, can go without it?
const views: {
  [key: string]: () => ReactElement
} = {
  roxFlow: Flow,
  roxForms: Forms,
  roxService: Service,
}

const featuresArtifacts: {
  [key: string]: () => ReactElement
} = {
  roxForms: FormsArtifacts,
  roxService: ServicesArtifacts,
}

const sectionColors = (color: string): [string, string] => {
  switch (color) {
    case 'green':
      return ['#5B9976', 'rgb(234, 242, 238)']
    case 'blue':
      return ['#486CE3', '#DBE2FA']
    case 'darkblue':
      return ['#5A60A6', '#DEDFED']
    case 'lightblue':
      return ['#4DA8D9', 'rgba(115, 207, 248, 0.2)']
    case 'purple':
      return ['rgba(169, 119, 215, 1)', '#F1E8F9']
    case 'orange':
      return ['#FB9D4B', '#FFF0E3']
    case 'red':
      return ['#ED725A', '#FFEAE6']
    default:
      return [color, color]
  }
}

const sectionsToListItem = (
  sections: ISectionsDictionary,
  isMobile = false
): ListItem[] => {
  return Object.values(sections).map(section => ({
    key: section.id,
    title: section.title,
    text: JSON.parse(section.description.raw),
    colors: {
      background: sectionColors(section.color)[1],
      text: sectionColors(section.color)[0],
    },
    image: getImage(
      isMobile ? section.sectionImage.mobile : section.sectionImage.desktop
    ),
    icon: function ProductIcon() {
      return (
        <IconWrapper color={sectionColors(section.color)[1]}>
          <SVG src={section.icon.file.url} />
        </IconWrapper>
      )
    },
    link: '#',
  }))
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
      {Object.values(product.sections).length > 0 && (
        <KeyFeatures
          list={sectionsToListItem(product.sections, isMobile)}
          artifacts={
            featuresArtifacts[product.key]
              ? featuresArtifacts[product.key]
              : undefined
          }
        />
      )}
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
        desktop: gatsbyImageData(
          layout: CONSTRAINED
          quality: 98
          placeholder: TRACED_SVG
        )
        mobile: gatsbyImageData(
          layout: CONSTRAINED
          width: 400
          quality: 80
          placeholder: TRACED_SVG
        )
      }
      sections {
        id
        order
        title
        description {
          raw
        }
        color
        alignLeft
        learnMoreText
        icon {
          title
          file {
            contentType
            url
          }
        }
        sectionImage {
          title
          desktop: gatsbyImageData(
            layout: CONSTRAINED
            quality: 98
            placeholder: TRACED_SVG
          )
          mobile: gatsbyImageData(
            layout: CONSTRAINED
            width: 400
            quality: 80
            placeholder: TRACED_SVG
          )
        }
      }
    }
  }
`
