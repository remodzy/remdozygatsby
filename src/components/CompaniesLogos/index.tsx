import React from 'react'

import { useDeviceDetect } from '~utils/hooks'

import ChubbLogo from './chubb'
import CatLogo from './cat'
import MailchimpLogo from './mailchimp'
import LyaLogo from './lya'
import SapLogo from './cap'
import companiesLogosStyles from './CompaniesLogos.module.css'

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
