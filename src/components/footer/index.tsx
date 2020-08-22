import React from 'react'
import Logo from '../logo'
import { getTextColor } from '../../utils/colors'
import Icon from '../icons'
import DotsArtifact from '../dot'

const textColors = getTextColor()

const styles = {
  root: {
    position: 'relative' as const,
    padding: '60px 140px',
  },
  container: {
    display: 'flex',
    paddingBottom: 80,
  },
  linksContainer: {
    display: 'flex',
    paddingLeft: 240,
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    marginRight: 130,
  },
  columnTitle: {
    fontSize: 23,
    fontWeight: 600,
    lineHeight: '31px',
    color: textColors.main,
    paddingBottom: 24,
  },
  link: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '22px',
    color: textColors.sub,
    marginTop: 26,
    textDecoration: 'none',
  },
  backToTop: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '19px',
  },
}

export default function Footer() {
  return (
    <footer style={styles.root}>
      <div style={styles.container}>
        <Logo />
        <div style={styles.linksContainer}>
          <div style={styles.linkColumn}>
            <div style={styles.columnTitle}>Company</div>
            <a style={styles.link} href='#'>
              Products
            </a>
            <a style={styles.link} href='#'>
              Integrations
            </a>
            <a style={styles.link} href='#'>
              Pricing
            </a>
          </div>
          <div style={styles.linkColumn}>
            <div style={styles.columnTitle}>About Remodzy</div>
            <a style={styles.link} href='#'>
              About Us
            </a>
            <a style={styles.link} href='#'>
              Blog
            </a>
            <a style={styles.link} href='#'>
              Privacy & Terms
            </a>
          </div>
          <div style={styles.linkColumn}>
            <div style={styles.columnTitle}>Talk With Us</div>
            <a style={styles.link} href='#'>
              Request a Free Demo
            </a>
            <a style={styles.link} href='#'>
              Contact Us
            </a>
            <a style={styles.link} href='#'>
              Careers
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>© {new Date().getFullYear()}, Remodzy LLC.</span>
        <span style={styles.backToTop}>
          <Icon name='arrowTop' />
          &nbsp;&nbsp;&nbsp;Back to top
        </span>
      </div>
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
    </footer>
  )
}
