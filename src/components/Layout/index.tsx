import React, { ReactElement } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import '../base.css'
import SEO from '../Seo'
import BlueBlock from '../BlueBlock'

type Props = {
  isTiny?: boolean
  children: ReactElement | (false | null | ReactElement)[]
}

const Layout: React.FC<Props> = ({ children, isTiny = false }) => (
  <>
    <SEO />
    <Header />
    <div>
      <main>
        {children}
        {!isTiny && <BlueBlock />}
      </main>
      {!isTiny && <Footer />}
    </div>
  </>
)
export default Layout
