import React, { FC, ReactElement } from 'react'

import ProductRow from '../ProductRow'
import InfoBlock from '../InfoBlock'

import Artifacts from './Artifacts'
import styles from './ProductsBlock.module.css'
import {
  RoxFlowIcon,
  RoxFormsIcon,
  RoxServiceIcon,
} from '~components/ProductIcons'
import { useDeviceDetect } from '~utils/hooks'

const productConfig = [
  {
    icon: () => <RoxFormsIcon isLarge />,
    label: 'Forms',
    link: '/forms',
    linkLabel: 'Learn more',
    extraItem: BetaLabel,
    imageUrls: {
      desktop: '/images/landing/landing-products-1.png',
      mobile: '/images/landing/m-landing-products-1.png',
    },
    imageWidth: 672,
    title: 'Build checklists, conduct inspections, Communicate with your team',
    text:
      'roxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries',
  },
  {
    icon: () => <RoxServiceIcon isLarge />,
    label: 'Service',
    link: '/service',
    linkLabel: 'Learn more',
    extraItem: ComingSoonLabel,
    imageUrls: {
      desktop: '/images/landing/landing-products-2.png',
      mobile: '/images/landing/m-landing-products-2.png',
    },
    imageWidth: 672,
    title: 'Field service management software',
    text:
      'With roxServices from Roxabo, you can schedule and manage jobs, dispatch them to field technicians,and provide ETAs to customers with notifications.',
  },
  {
    icon: () => <RoxFlowIcon isLarge />,
    label: 'Flow',
    link: '/flow',
    linkLabel: 'Learn more',
    extraItem: ComingSoonLabel,
    imageUrls: {
      desktop: '/images/landing/landing-products-3.png',
      mobile: '/images/landing/m-landing-products-3.png',
    },
    imageWidth: 640,
    title: 'Tie your apps together, set yourself free.',
    text:
      'Automate business workflows by connecting your apps with RoxFlow. Build smart integrations to break the information silos in your business.',
  },
]

const ProductsBlock: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

  return (
    <div className={styles.root}>
      <div className={styles.title}>Our Products</div>
      <div className={styles.rowContainer}>
        {productConfig.map(product => (
          <ProductRow key={product.label}>
            <InfoBlock
              icon={product.icon}
              label={product.label}
              linkLabel={product.linkLabel}
              text={product.text}
              title={product.title}
              link={product.link}
              extraItem={product.extraItem}
            />
            <div className={styles.productImage}>
              <img
                src={
                  isMobile
                    ? product.imageUrls.mobile
                    : product.imageUrls.desktop
                }
                alt=''
              />
            </div>
          </ProductRow>
        ))}
      </div>
      <Artifacts />
    </div>
  )
}

export default ProductsBlock

function BetaLabel(): ReactElement {
  return <span className={styles.betaLabel}>BETA 1.4</span>
}

function ComingSoonLabel() {
  return <span className={styles.comingSoonLabel}>COMING SOON</span>
}
