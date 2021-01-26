import React, { useCallback } from 'react'
import { Link } from 'gatsby'

import { authorize } from '~utils/auth'
import { useDeviceDetect } from '~utils/hooks'

import Logo from '../Logo'
import HeaderMenu from '../HeaderMenu'
import LinkButton from '../LinkButton'
import Button from '../Button'
import headerStyles from './styles.module.css'

const Header = () => {
  const { isMobile } = useDeviceDetect()

  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  const handleSignUp = useCallback(() => {
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
        <HeaderMenu />
        {!isMobile && (
          <div className={headerStyles.buttonsContainer}>
            <div className={headerStyles.loginContainer}>
              <LinkButton label='Log In' handleClick={handleLogin} />
            </div>
            <Button
              label='Get Started'
              className='primary-btn'
              handleClick={handleSignUp}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
