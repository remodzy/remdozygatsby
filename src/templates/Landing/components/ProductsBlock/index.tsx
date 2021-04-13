import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import RGrid, { ListItem } from '~components/RGrid'
import RSection from '~components/RSection'
import { prepareProduct, Product, ProductNode } from '~utils/mapProducts'

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
  const data = useStaticQuery(query)
  const products = data.allContentfulProducts?.edges
  if (!products) return <></>
  return (
    <ProductsBlock
      productConfig={productsToListItems(products, isMobile).map(
        (product): ListItem => ({
          ...product,
          image: product.promoImage,
        })
      )}
    />
  )
}

const productsToListItems = (
  products: { node: ProductNode }[],
  isMobile = false
): Product[] => {
  return [
    ...products.map(product => {
      return prepareProduct(product.node, isMobile)
    }),
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
  }
`
