import React, { ReactElement } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import '../base.css'
import SEO from '../Seo'
import BlueBlock from '../BlueBlock'

type Props = {
  children: ReactElement | ReactElement[]
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <SEO />
    <Header />
    <div>
      <main>{children}</main>
      <BlueBlock />
      <Footer />
    </div>
  </>
)
export default Layout
