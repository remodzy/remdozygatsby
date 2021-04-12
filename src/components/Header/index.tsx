import { Link } from 'gatsby'
import React, { ReactElement, useCallback } from 'react'
import { isMobile } from 'react-device-detect'

import { authorize } from '~utils/auth'
import { isSSR } from '~utils/hooks'

import Button from '../Button'
import HeaderMenu from '../HeaderMenu'
import LinkButton from '../LinkButton'
import Logo from '../Logo'
import RContainer from '../RContainer'
import * as styles from './Header.module.css'

const Header = (): ReactElement => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <header className={styles.root}>
      <RContainer>
        <div className={styles.wrapper}>
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
          {!isSSR() && !isMobile && (
            <div className={styles.buttonsContainer}>
              <div className={styles.loginContainer}>
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
      </RContainer>
    </header>
  )
}

export default Header
