import React from 'react'
import ChubbLogo from './chubb'
import CatLogo from './cat'
import MailchimpLogo from './mailchimp'
import LyaLogo from './lya'
import SapLogo from './cap'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '82%',
    padding: '80px 0 0',
    margin: '0 15.4375%',
  },
}

export default function CompaniesLogos() {
  return (
    <div style={styles.root}>
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
