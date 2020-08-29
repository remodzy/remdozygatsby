import React, { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import Header from '../header'
import Footer from '../footer'

import '../base.css'
import SEO from '../seo'

type Props = {
  children: ReactElement | ReactElement[]
}

export const DeviceDetectContext = React.createContext({
  isMobile: false,
})

export default function Layout({ children }: Props) {
  return (
    <DeviceDetectContext.Provider
      value={{
        isMobile,
      }}
    >
      <SEO />
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </DeviceDetectContext.Provider>
  )
}
