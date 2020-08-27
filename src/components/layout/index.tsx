import React from 'react'

import Header from '../header'
import Footer from '../footer'

import '../base.css'
import SEO from '../seo'

export default function Layout({ children }) {
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
