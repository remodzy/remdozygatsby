import React, { ReactElement } from 'react'

import Header from '../header'
import Footer from '../footer'

import '../base.css'
import SEO from '../seo'

type Props = {
  children: ReactElement | ReactElement[]
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
export default Layout
