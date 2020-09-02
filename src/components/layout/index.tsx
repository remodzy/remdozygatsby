import React, { ReactElement, useEffect, useState } from 'react'

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

function detectMobileDevice() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 800
  }
  return false
}

export default function Layout({ children }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(detectMobileDevice())
  })

  return (
    <DeviceDetectContext.Provider value={{ isMobile }}>
      <SEO />
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </DeviceDetectContext.Provider>
  )
}
