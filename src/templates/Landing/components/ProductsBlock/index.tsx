import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React, { FC, ReactElement } from 'react'
import SVG from 'react-inlinesvg'

import { ContentfulAssetIcon, IconWrapper } from '~components/ProductIcons'
import RGrid, { ListItem } from '~components/RGrid'
import RSection from '~components/RSection'
import { useDeviceDetect } from '~utils/hooks'
import { BetaLabel, ComingSoonLabel } from '~utils/mapProducts'

import Artifacts from './Artifacts'
import * as styles from './ProductsBlock.module.css'

type Props = {
  productConfig: ListItem[]
}
const ProductsBlock: FC<Props> = ({ productConfig }): ReactElement => {
  return (
    <RSection artifacts={Artifacts}>
      <div className={styles.root}>
        <RGrid items={productConfig} title='Our Products' />
      </div>
    </RSection>
  )
}

const Products: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()
  const data = useStaticQuery(query)

  return <ProductsBlock productConfig={productsToListItems(data, isMobile)} />
}

//TODO: align products with Product & ProductNode
const productsToListItems = (products: any, isMobile = false): ListItem[] => {
  const colors = { background: '#4865EB', text: '#ffffff' }
  return [
    ...products?.allContentfulProducts?.edges.map((product: any) => ({
      key: product.node.name,
      icon: function ProductIcon() {
        return (
          <IconWrapper isLarge={true} isMobile={false}>
            <SVG
              src={
                product.node.productIcon.find(
                  (icon: ContentfulAssetIcon) => icon.title === 'icon-white'
                ).file.url
              }
            />
          </IconWrapper>
        )
      },
      label: JSON.parse(product.node.productName.productName),
      link: `/${product.node.name.toLowerCase()}`,
      extraItem:
        product.node.extra === 'beta'
          ? BetaLabel
          : product.node.extra === 'coming_soon'
          ? ComingSoonLabel
          : '',
      image: getImage(
        isMobile
          ? product.node.promoImage.mobile
          : product.node.promoImage.desktop
      ),
      title: JSON.parse(product.node.subtitle1.subtitle1),
      text: JSON.parse(product.node.subtitle2.subtitle2),
      learnMoreText: product.node.learnMoreButton,
      colors,
    })),
  ]
}

export default Products

export const query = graphql`
  query allContentfulProductsQuery {
    allContentfulProducts(sort: { fields: order }) {
      edges {
        node {
          id
          name
          order
          align
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
          promoImage {
            title
            desktop: gatsbyImageData(layout: CONSTRAINED, quality: 92)
            mobile: gatsbyImageData(
              layout: CONSTRAINED
              width: 400
              quality: 80
            )
          }
        }
      }
    }
  }
`
