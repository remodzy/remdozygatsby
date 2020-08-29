import React from 'react'

import ChubbLogo from './chubb'
import CatLogo from './cat'
import MailchimpLogo from './mailchimp'
import LyaLogo from './lya'
import SapLogo from './cap'
import companiesLogosStyles from './CompaniesLogos.module.css'

export default function CompaniesLogos() {
  return (
    <div className={companiesLogosStyles.root}>
      <div>
        <ChubbLogo />
      </div>
      <div>
        <CatLogo />
      </div>
      <div>
        <MailchimpLogo />
      </div>
      <div>
        <LyaLogo />
      </div>
      <div>
        <SapLogo />
      </div>
    </div>
  )
}
