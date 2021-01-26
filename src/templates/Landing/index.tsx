import React, { FC, ReactElement } from 'react'
import PrimaryBlock from './components/PrimaryBlock'
import ProductsBlock from './components/ProductsBlock'

const LandingTemplate: FC<unknown> = (): ReactElement => (
  <>
    <PrimaryBlock />
    <ProductsBlock />
  </>
)

export default LandingTemplate
