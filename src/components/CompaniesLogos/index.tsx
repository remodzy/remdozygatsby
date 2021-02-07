import React from 'react'

import { useDeviceDetect } from '~utils/hooks'

import SapLogo from './cap'
import CatLogo from './cat'
import ChubbLogo from './chubb'
import companiesLogosStyles from './CompaniesLogos.module.css'
import LyaLogo from './lya'
import MailchimpLogo from './mailchimp'

const CompaniesLogos = () => {
  const { isMobile } = useDeviceDetect()
  return (
    <div className={companiesLogosStyles.root}>
      <div className={companiesLogosStyles.item} style={{ gridArea: 'a' }}>
        <ChubbLogo />
      </div>
      <div className={companiesLogosStyles.item} style={{ gridArea: 'b' }}>
        <CatLogo />
      </div>
      <div
        className={companiesLogosStyles.item}
        style={{ gridArea: 'c', justifySelf: isMobile ? 'flex-end' : 'center' }}
      >
        <MailchimpLogo />
      </div>
      <div className={companiesLogosStyles.item} style={{ gridArea: 'd' }}>
        <LyaLogo />
      </div>
      <div className={companiesLogosStyles.item} style={{ gridArea: 'e' }}>
        <SapLogo />
      </div>
    </div>
  )
}

export default CompaniesLogos
