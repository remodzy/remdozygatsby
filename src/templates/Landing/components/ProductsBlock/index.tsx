import React, { FC, ReactElement } from 'react'

import RGrid from '~components/RGrid'
import RSection from '~components/RSection'

import Artifacts from './Artifacts'
import { productConfig } from './productConfig'
import styles from './ProductsBlock.module.css'

const ProductsBlock: FC<unknown> = (): ReactElement => {
  return (
    <RSection artifacts={Artifacts}>
      <div className={styles.root}>
        <RGrid items={productConfig} title='Our Products' />
      </div>
    </RSection>
  )
}

export default ProductsBlock
