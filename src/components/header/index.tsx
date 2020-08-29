import React, { useCallback, useContext } from 'react'
import { Link } from 'gatsby'

import { login } from '~utils/auth'

import { DeviceDetectContext } from '../layout'
import Logo from '../logo'
import HeaderMenu from '../headerMenu'
import LinkButton from '../linkButton'
import Button from '../button'
import headerStyles from './Header.module.css'

const Header = () => {
  const { isMobile } = useContext(DeviceDetectContext)

  const handleLogin = useCallback(() => {
    login()
  }, [])
  return (
    <header className={headerStyles.root}>
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
      {!isMobile && (
        <div className={headerStyles.buttonsContainer}>
          <div className={headerStyles.loginContainer}>
            <LinkButton label='Log In' handleClick={handleLogin} />
          </div>
          <Button
            label='Get Started'
            className='primary-btn'
            handleClick={() => {}}
          />
        </div>
      )}
    </header>
  )
}

export default Header
