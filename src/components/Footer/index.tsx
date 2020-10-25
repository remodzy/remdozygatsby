import { useDeviceDetect } from '~utils/hooks'

import Logo from '../Logo'
import Icon from '../Icons'
import DotsArtifact from '../Dot'
import BlockWrapper from '../BlockWrapper'
import FooterLink from './FooterLink'
import footerStyles from './AppFooter.module.css'

export default function Footer() {
  const { isMobile } = useDeviceDetect()

  return (
    <footer className={footerStyles.root}>
      <BlockWrapper
        styleWrapper={{
          padding: isMobile ? '80px 18px 50px' : '60px 8.75%',
        }}
      >
        <div className={footerStyles.container}>
          <div>
            <Logo />
          </div>
          <div className={footerStyles.linksContainer}>
            <div className={footerStyles.linkColumn}>
              <div className={footerStyles.columnTitle}>Company</div>
              <FooterLink text='Products' url='#' />
              <FooterLink text='Integrations' url='#' />
              <FooterLink text='Pricing' url='#' />
            </div>
            <div className={footerStyles.linkColumn}>
              <div className={footerStyles.columnTitle}>About Remodzy</div>
              <FooterLink text='About Us' url='#' />
              <FooterLink text='Blog' url='#' />
              <FooterLink text='Privacy & Terms' url='#' />
            </div>
            <div className={footerStyles.linkColumn}>
              <div className={footerStyles.columnTitle}>Talk With Us</div>
              <FooterLink text='Request a Free Demo' url='#' />
              <FooterLink text='Contact Us' url='#' />
              <FooterLink text='Careers' url='#' />
            </div>
          </div>
        </div>
        <hr />
        <div className={footerStyles.copyrightContainer}>
          <span>© {new Date().getFullYear()}, Remodzy LLC.</span>
          <span className={footerStyles.backToTop}>
            <Icon name='arrowTop' />
            &nbsp;&nbsp;&nbsp;Back to top
          </span>
        </div>
      </BlockWrapper>
      {isMobile ? <MobileArtifacts /> : <DesktopArtifacts />}
    </footer>
  )
}

function MobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={29}
        right={33}
        columns={8}
        gap={15.9}
        size={3.34}
        // prettier-ignore
        list={[
        0,1,1,0,0,0,0,0,
        0,0,0,0,0,0,1,0,
        0,0,0,1,0,0,1,0,
        1,0,0,0,0,0,0,0,
      ]}
      />
      <DotsArtifact
        top={357}
        right={65}
        columns={4}
        gap={16.4}
        size={3.44}
        // prettier-ignore
        list={[
        1,0,0,0,
        0,0,0,1,
        0,1,0,1,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,1,1,0,
        0,0,0,0,
      ]}
      />
    </>
  )
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
