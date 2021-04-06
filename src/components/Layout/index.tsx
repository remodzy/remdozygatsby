import '../base.css'

import React, { ReactElement } from 'react'

import ZendeskButton from '~components/ZendeskButton'
import { Article } from '~utils/mapArticles'

import BlueBlock from '../BlueBlock'
import Footer from '../Footer'
import Header from '../Header'
import SEO from '../Seo'

type Props = {
  children: ReactElement | (false | null | ReactElement)[]
  article?: Article
}

const Layout: React.FC<Props> = ({ children, article }) => (
  <>
    <SEO
      title={article?.title}
      description={article?.description}
      image={article?.image?.gatsbyImageData?.images?.fallback?.src}
    />
    <Header />
    <div>
      <main style={{ background: 'white', paddingTop: 84 }}>
        {children}
        <BlueBlock />
      </main>
      <Footer />
      <ZendeskButton />
      {/* TODO: style optout, see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/#anonymize */}
      {/*<a href="javascript:gaOptout();">Deactivate Google Analytics</a>*/}
    </div>
  </>
)
export default Layout
