import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../logo'
import HeaderMenu from '../headerMenu'
import Button from '../button'
import LinkButton from '../linkButton'

const Header = () => (
  <header
    style={{
      background: `#ffffff`,
      marginBottom: `1.45rem`,
      boxShadow: `0px 4px 20px rgba(179, 192, 213, 0.25)`,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to='/'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo />
      </Link>
      <HeaderMenu />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ marginRight: 32 }}>
          <LinkButton label='Log In' handleClick={() => {}} />
        </div>
        <Button
          label='Get Started'
          className='primary-btn'
          handleClick={() => {}}
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
