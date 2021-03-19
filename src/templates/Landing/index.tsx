import React, { FC, ReactElement } from 'react'

import PrimaryBlock from './components/PrimaryBlock'
import ProductsBlock from './components/ProductsBlock'
import RBlog from '~components/RBlog'

const LandingTemplate: FC<unknown> = (): ReactElement => (
  <>
    <PrimaryBlock />
    <ProductsBlock />
    <RBlog />
  </>
)

export default LandingTemplate
