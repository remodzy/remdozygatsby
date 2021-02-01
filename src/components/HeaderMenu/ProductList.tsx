import { ReactElement } from 'react'
import * as React from 'react'

import productListStyles from './ProductList.module.css'
import {
  RoxFlowIcon,
  RoxFormsIcon,
  RoxServiceIcon,
} from '~components/ProductIcons'

type Props = {
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
  link: string
}

const getFormIcon = (): ReactElement => <RoxFormsIcon />
const getServiceIcon = (): ReactElement => <RoxServiceIcon isLarge />
const getFlowIcon = (): ReactElement => <RoxFlowIcon isLarge />

export const products: ProductMenuItem[] = [
  {
    key: 'forms',
    title: 'roxForms',
    subTitle: 'Forms builder',
    icon: getFormIcon,
    link: '/forms',
  },
  {
    key: 'services',
    title: 'roxService',
    subTitle: 'Project tracking',
    icon: getServiceIcon,
    link: '/service',
  },
  {
    key: 'flow',
    title: 'roxFlow',
    subTitle: 'Powerful Workflows',
    icon: getFlowIcon,
    link: '/flow',
  },
]

const MobileProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, icon: Icon, link }) => (
      <a href={link} key={key} className={productListStyles.item}>
        <Icon />
        <div className={productListStyles.mainBlock}>
          <span className={productListStyles.title}>{title}</span>
          <span className={productListStyles.subTitle}>{subTitle}</span>
        </div>
      </a>
    ))}
  </>
)

const DesktopProductListMenuItems: React.FC<MenuProps> = ({ list }) => (
  <>
    {list.map(({ key, title, subTitle, icon: Icon, link }) => (
      <a href={link} key={key} className={productListStyles.item}>
        <Icon />
        <div className={productListStyles.mainBlock}>
          <span className={productListStyles.title}>{title}</span>
          <span className={productListStyles.subTitle}>{subTitle}</span>
        </div>
      </a>
    ))}
  </>
)

const ProductListMenu: React.FC<Props> = ({ isMobile = false }) =>
  isMobile ? (
    <MobileProductListMenuItems list={products} />
  ) : (
    <DesktopProductListMenuItems list={products} />
  )

export default ProductListMenu
