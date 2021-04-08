import React, { FC, ReactElement } from 'react'

import RBlog from '~components/RBlog'

import PrimaryBlock from './components/PrimaryBlock'
import ProductsBlock from './components/ProductsBlock'

const LandingTemplate: FC<unknown> = (): ReactElement => (
  <>
    <PrimaryBlock />
    <ProductsBlock />
    <RBlog />
  </>
)

export default LandingTemplate
