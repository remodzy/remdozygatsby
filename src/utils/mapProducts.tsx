import { Document } from '@contentful/rich-text-types'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FC, ReactElement } from 'react'
import SVG from 'react-inlinesvg'

import { ContentfulAssetIcon, IconWrapper } from '~components/ProductIcons'

import { betaLabel, comingSoonLabel } from './mapProducts.module.css'

export interface ISectionsDictionary {
  [index: number]: Section
}

export type Section = {
  id: string
  order: number
  title: string
  description: {
    raw: string
  }
  color: string
  alignLeft: boolean
  learnMoreText: string
  icon: {
    title: string
    file: {
      contentType: string
      url: string
    }
  }
  sectionImage: {
    title: string
    desktop: IGatsbyImageData
    mobile: IGatsbyImageData
  }
}

export interface IBenefitsDictionary {
  [index: number]: Benefit
}

export type Benefit = {
  id: string
  order: number
  align: 'left' | 'right' | 'center'
  color: string
  title: string
  description: Document | string
  icon: {
    title: string
    file: {
      contentType: string
      url: string
    }
  }
}

export type Product = {
  key: string
  align?: 'left' | 'right'
  label?: Document | string
  colors: {
    background: string
    text: string
  }
  link: string
  title: Document | string
  text: Document | string
  icon: FC<unknown>
  mainImage?: IGatsbyImageData
  promoImage?: IGatsbyImageData
  learnMoreText?: string
  extraItem?: FC<unknown>
  comingSoon: boolean
  hasCover: boolean
  sections: ISectionsDictionary
  benefitsTitle: string
  benefitsColsNumber: number
  benefits: IBenefitsDictionary
}

export type ProductNode = {
  id: string
  name: string
  order: number
  align: 'left' | 'right'
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
  promoImage: {
    title: string
    desktop: IGatsbyImageData
    mobile: IGatsbyImageData
  }
  sections: Section[]
  benefitsTitle: string
  benefitsColsNumber: number
  benefits: Benefit[]
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
  align: node.align,
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
  mainImage: node.mainImage
    ? getImage(isMobile ? node.mainImage.mobile : node.mainImage.desktop)
    : undefined,
  promoImage: node.promoImage
    ? getImage(isMobile ? node.promoImage.mobile : node.promoImage.desktop)
    : undefined,
  title: JSON.parse(node.subtitle1.subtitle1),
  text: JSON.parse(node.subtitle2.subtitle2),
  learnMoreText: node.learnMoreButton,
  comingSoon: node.comingSoon,
  hasCover: node.hasCover,
  colors,
  sections: node.sections
    ? node.sections.reduce(
        //TODO: non-unique order will be replaced
        (list, section) => ({ ...list, [section.order]: section }),
        {}
      )
    : {},
  benefitsTitle: node.benefitsTitle,
  benefitsColsNumber: node.benefitsColsNumber,
  benefits: node.benefits
    ? node.benefits.reduce(
        //TODO: non-unique order will be replaced
        (list, benefit) => ({ ...list, [benefit.order]: benefit }),
        {}
      )
    : {},
})
