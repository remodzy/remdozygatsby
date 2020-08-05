import React from 'react'
import ChubbLogo from './chubb'
import CatLogo from './cat'
import MailchimpLogo from './mailchimp'
import LyaLogo from './lya'
import SapLogo from './cap'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '80px 15.625% 0 15.625%',
  },
}

export default function CompaniesLogos() {
  return (
    <div style={styles.root}>
      <ChubbLogo />
      <CatLogo />
      <MailchimpLogo />
      <LyaLogo />
      <SapLogo />
    </div>
  )
}
