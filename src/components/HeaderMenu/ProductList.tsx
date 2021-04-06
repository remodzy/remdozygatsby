import { graphql, Link, StaticQuery } from 'gatsby'
import { FC, ReactElement } from 'react'
import * as React from 'react'
import SVG from 'react-inlinesvg'

import { ContentfulAssetIcon, IconWrapper } from '~components/ProductIcons'

import * as styles from './ProductList.module.css'

type ListMenuBlockProps = {
  products: ProductMenuItem[]
  isMobile?: boolean
}

type ListMenuProps = {
  isMobile?: boolean
}

type MenuProps = {
  list: ProductMenuItem[]
}

type ProductMenuItem = {
  key: string
  title: string
  subTitle: string
  icon: () => ReactElement
  iconMobile: () => ReactElement
  link: string
}

const MobileProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, iconMobile: Icon, link }) => (
      <Link to={link} key={key} className={styles.item}>
        <Icon />
        <div className={styles.mainBlock}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
      </Link>
    ))}
  </>
)

const DesktopProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, icon: Icon, link }) => (
      <Link to={link} key={key} className={styles.item}>
        <Icon />
        <div className={styles.mainBlock}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
      </Link>
    ))}
  </>
)

const ProductListMenu: FC<ListMenuProps> = ({
  isMobile = false,
}): ReactElement => {
  return (
    <StaticQuery
      query={graphql`
        query allContentfulProductsMenuQuery {
          allContentfulProducts(sort: { fields: order }) {
            edges {
              node {
                id
                name
                description
                order
                iconSize
                productIcon {
                  title
                  file {
                    contentType
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ProductListMenuBlock
          products={productsToListMenuItems(data)}
          isMobile={isMobile}
        />
      )}
    />
  )
}

const productsToListMenuItems = (products: any): ProductMenuItem[] => {
  return [
    ...products?.allContentfulProducts?.edges.map((product: any) => ({
      key: product.node.name,
      title: product.node.name,
      subTitle: product.node.description,
      icon: function ProductDesktopIcon() {
        return (
          <IconWrapper
            isLarge={product.node.iconSize === 'large'}
            isMobile={false}
          >
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
      iconMobile: function ProductMobileIcon() {
        return (
          <IconWrapper
            isLarge={product.node.iconSize === 'large'}
            isMobile={true}
          >
            <SVG
              src={
                product.node.productIcon.find(
                  (icon: ContentfulAssetIcon) => icon.title === 'icon-blue'
                ).file.url
              }
            />
          </IconWrapper>
        )
      },
      link: `/${product.node.name.toLowerCase()}`,
    })),
  ]
}

const ProductListMenuBlock: React.FC<ListMenuBlockProps> = ({
  products,
  isMobile = false,
}) =>
  isMobile ? (
    <MobileProductListMenuItems list={products} />
  ) : (
    <DesktopProductListMenuItems list={products} />
  )

export default ProductListMenu
