import React, { ReactElement } from 'react'

import { useDeviceDetect } from '~utils/hooks'

import DotsArtifact from '../Dot'
import Logo from '../Logo'
import RContainer from '../RContainer'
import styles from './AppFooter.module.css'
import FooterLink from './FooterLink'

export default function Footer(): ReactElement {
  const { isMobile } = useDeviceDetect()

  return (
    <footer className={styles.root}>
      <RContainer>
        <div className={styles.container}>
          <div>
            <Logo />
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.linkColumn}>
              <div className={styles.columnTitle}>Company</div>
              <FooterLink text='Products' url='#' />
              <FooterLink text='Integrations' url='#' />
              <FooterLink text='Pricing' url='#' />
            </div>
            <div className={styles.linkColumn}>
              <div className={styles.columnTitle}>About Roxabo</div>
              <FooterLink text='About Us' url='#' />
              <FooterLink text='Blog' url='#' />
              <FooterLink text='Privacy & Terms' url='#' />
            </div>
            <div className={styles.linkColumn}>
              <div className={styles.columnTitle}>Talk With Us</div>
              <FooterLink text='Request a Free Demo' url='#' />
              <FooterLink text='Contact Us' url='#' />
              <FooterLink text='Careers' url='#' />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.copyrightContainer}>
          <span>© {new Date().getFullYear()}, ROXABO PTY LTD.</span>
        </div>
      </RContainer>
      {isMobile ? <MobileArtifacts /> : <DesktopArtifacts />}
    </footer>
  )
}

function MobileArtifacts() {
  return <></>
}
function DesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={151}
        left={11}
        columns={3}
        gap={18.7}
        size={3.99}
        // prettier-ignore
        list={[
        0,0,0,
        0,0,1,
        0,0,1,
        1,0,0,
        0,0,0,
        0,0,0,
        1,1,0,
        0,0,0,
      ]}
      />
      <DotsArtifact
        top={98}
        right={13}
        columns={5}
        size={3.93}
        gap={18.71}
        // prettier-ignore
        list={[
        0,1,1,0,0,
        0,0,0,0,0,
        0,0,0,1,0,
        1,0,0,0,0,
      ]}
      />
    </>
  )
}
