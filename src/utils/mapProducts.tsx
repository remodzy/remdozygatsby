import { Document } from '@contentful/rich-text-types'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FC, ReactElement } from 'react'
import SVG from 'react-inlinesvg'

import { ContentfulAssetIcon, IconWrapper } from '~components/ProductIcons'

import { betaLabel, comingSoonLabel } from './mapProducts.module.css'

export type Product = {
  key: string
  label?: Document | string
  colors: {
    background: string
    text: string
  }
  link: string
  title: Document | string
  text: Document | string
  icon: FC<unknown>
  image?: IGatsbyImageData
  learnMoreText?: string
  extraItem?: FC<unknown>
  comingSoon: boolean
  hasCover: boolean
}

export type ProductNode = {
  id: string
  name: string
  order: number
  align: string
  extra: string
  comingSoon: boolean
  hasCover: boolean
  productName: {
    productName: string
  }
  subtitle1: {
    subtitle1: string
  }
  subtitle2: {
    subtitle2: string
  }
  learnMoreButton: string
  productIcon: {
    title: string
    file: {
      contentType: string
      url: string
    }
  }[]
  mainImage: {
    title: string
    desktop: IGatsbyImageData
    mobile: IGatsbyImageData
  }
  sections: {
    id: string
  }
}

export const colors = { background: '#4865EB', text: '#ffffff' }

export const BetaLabel: FC<unknown> = (): ReactElement => (
  <span className={betaLabel}>BETA 1.4</span>
)

export const ComingSoonLabel: FC<unknown> = (): ReactElement => (
  <span className={comingSoonLabel}>COMING SOON</span>
)

export const prepareProduct = (
  node: ProductNode,
  isMobile: boolean
): Product => ({
  key: node.name,
  icon: function ProductIcon() {
    return (
      <IconWrapper isLarge={true} isMobile={false}>
        <SVG
          src={
            node.productIcon.find(
              (icon: ContentfulAssetIcon) => icon.title === 'icon-white'
            )?.file.url || ''
          }
        />
      </IconWrapper>
    )
  },
  label: JSON.parse(node.productName.productName),
  link: `/${node.name.toLowerCase()}`,
  extraItem:
    node.extra === 'beta'
      ? BetaLabel
      : node.extra === 'coming_soon'
      ? ComingSoonLabel
      : undefined,
  image: getImage(isMobile ? node.mainImage.mobile : node.mainImage.desktop),
  title: JSON.parse(node.subtitle1.subtitle1),
  text: JSON.parse(node.subtitle2.subtitle2),
  learnMoreText: node.learnMoreButton,
  comingSoon: node.comingSoon,
  hasCover: node.hasCover,
  colors,
})
