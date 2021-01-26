import React, { FC, ReactElement } from 'react'

import ProductRow from '../ProductRow'
import InfoBlock from '../InfoBlock'
import { RoxFlowIcon, RoxFormsIcon, RoxServiceIcon } from '../Icons'

import Artifacts from './Artifacts'
import styles from './styles.module.css'

const ProductsBlock: FC<unknown> = (): ReactElement => (
  <div className={styles.root}>
    <div className={styles.title}>Our Products</div>
    <div className={styles.rowContainer}>
      <ProductRow>
        <InfoBlock
          icon={RoxFormsIcon}
          label='Forms'
          buttonLabel='Learn more'
          text='roxForms by Roxabo is an inspection app now used  50,000 times a day in over 80 countries'
          title='Build checklists, conduct inspections, Communicate with your team'
          buttonHandler={() => {}}
          extraItem={BetaLabel}
        />
        <div className={styles.productImage} style={{ width: 672 }}>
          <img src='/images/landing/landing-products-1.png' alt='' />
        </div>
      </ProductRow>
      <ProductRow>
        <div className={styles.productImage} style={{ width: 672 }}>
          <img src='/images/landing/landing-products-2.png' alt='' />
        </div>
        <InfoBlock
          icon={RoxServiceIcon}
          label='Service'
          buttonLabel='Learn more'
          text='With roxServices from Roxabo, you can schedule and manage jobs, dispatch them to field technicians,and provide ETAs to customers with notifications.'
          title='Field service management software'
          buttonHandler={() => {}}
          extraItem={ComingSoonLabel}
        />
      </ProductRow>
      <ProductRow>
        <InfoBlock
          icon={RoxFlowIcon}
          label='Flow'
          buttonLabel='Learn more'
          text='roxForms by Roxabo is an inspection app now used 50,000 times a day in over 80 countries'
          title='Build checklists, conduct inspections, Communicate with your team'
          buttonHandler={() => {}}
          extraItem={ComingSoonLabel}
        />
        <div className={styles.productImage} style={{ width: 640 }}>
          <img src='/images/landing/landing-products-3.png' alt='' />
        </div>
      </ProductRow>
    </div>
    <Artifacts />
  </div>
)

export default ProductsBlock

function BetaLabel(): ReactElement {
  return <span className={styles.betaLabel}>BETA 1.4</span>
}

function ComingSoonLabel() {
  return <span className={styles.comingSoonLabel}>COMING SOON</span>
}
