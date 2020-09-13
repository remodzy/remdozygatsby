import React, { useCallback, useContext } from 'react'
import { Link } from 'gatsby'

import { authorize } from '~utils/auth'

import { DeviceDetectContext } from '../layout'
import Logo from '../logo'
import HeaderMenu from '../headerMenu'
import LinkButton from '../linkButton'
import Button from '../button'
import headerStyles from './Header.module.css'

const Header = () => {
  const { isMobile } = useContext(DeviceDetectContext)

  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  const handleSignup = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <header className={headerStyles.root}>
      <div className={headerStyles.wrapper}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
        <HeaderMenu handleLogin={handleLogin} />
        {!isMobile && (
          <div className={headerStyles.buttonsContainer}>
            <div className={headerStyles.loginContainer}>
              <LinkButton label='Log In' handleClick={handleLogin} />
            </div>
            <Button
              label='Get Started'
              className='primary-btn'
              handleClick={handleSignup}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
