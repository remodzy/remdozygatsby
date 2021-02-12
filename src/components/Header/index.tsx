import { Link } from 'gatsby'
import React, { ReactElement, useCallback } from 'react'

import { authorize } from '~utils/auth'
import { useDeviceDetect } from '~utils/hooks'

import Button from '../Button'
import HeaderMenu from '../HeaderMenu'
import LinkButton from '../LinkButton'
import Logo from '../Logo'
import RoxContainer from '../RoxContainer'
import headerStyles from './Header.module.css'

const Header = (): ReactElement => {
  const { isMobile } = useDeviceDetect()

  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <header className={headerStyles.root}>
      <RoxContainer>
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
      </RoxContainer>
    </header>
  )
}

export default Header
