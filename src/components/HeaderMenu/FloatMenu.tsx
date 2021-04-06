import { Link } from 'gatsby'
import { useCallback } from 'react'
import * as React from 'react'

import Accordion from '~components/Accordion'
import LinkButton from '~components/LinkButton'
import Logo from '~components/Logo'
import { authorize } from '~utils/auth'

import * as styles from './FloatMenu.module.css'
import { MenuItem } from './index'
import MenuToggle from './MenuToggle'
import ProductListMenu from './ProductList'

type Props = {
  menuList: MenuItem[]
  handleClose: () => void
}

const FloatMenu: React.FC<Props> = ({ menuList, handleClose }) => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])
  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.backgroundWrapper} />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo />
          </Link>
          <MenuToggle show handleClick={handleClose} />
        </div>
        <div className={styles.menuWrapper}>
          <Accordion title={'Products'}>
            <ProductListMenu isMobile />
          </Accordion>
          {menuList.map(item =>
            /^\/(?!\/)/.test(item.link) ? (
              <Link key={item.text} className={styles.menuItem} to={item.link}>
                {item.text}
              </Link>
            ) : (
              <a
                key={item.text}
                target='_blank'
                rel='noreferrer'
                className={styles.menuItem}
                href={item.link}
              >
                {item.text}
              </a>
            )
          )}
          <div className={styles.menuItem}>
            <LinkButton label='Log In' handleClick={handleLogin} />
          </div>
          <div className={styles.menuItem}>
            <LinkButton label='Get Started' handleClick={handleSignUp} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FloatMenu
