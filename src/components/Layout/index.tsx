import React, { ReactElement } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import '../base.css'
import SEO from '../Seo'
import BlueBlock from '../BlueBlock'

type Props = {
  children: ReactElement | (false | null | ReactElement)[]
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <SEO />
    <Header />
    <div>
      <main style={{ background: 'white', paddingTop: 84 }}>
        {children}
        <BlueBlock />
      </main>
      <Footer />
    </div>
  </>
)
export default Layout
