import '../base.css'

import React, { ReactElement } from 'react'

import BlueBlock from '../BlueBlock'
import Footer from '../Footer'
import Header from '../Header'
import SEO from '../Seo'

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
      {/* TODO: style optout, see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/#anonymize */}
      {/*<a href="javascript:gaOptout();">Deactivate Google Analytics</a>*/}
    </div>
  </>
)
export default Layout
