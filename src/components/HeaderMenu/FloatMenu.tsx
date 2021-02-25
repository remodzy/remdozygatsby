import { Link } from 'gatsby'
import { useCallback } from 'react'
import * as React from 'react'

import Accordion from '~components/Accordion'
import Button from '~components/Button'
import LinkButton from '~components/LinkButton'
import Logo from '~components/Logo'
import { authorize } from '~utils/auth'

import { MenuItem } from './index'
import MenuToggle from './MenuToggle'
import ProductListMenu from './ProductList'

import floatMenuStyles from './FloatMenu.module.css'

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
    <div className={floatMenuStyles.root}>
      <div className={floatMenuStyles.backgroundOverlay}>
        <div className={floatMenuStyles.backgroundWrapper} />
      </div>
      <div className={floatMenuStyles.menuContainer}>
        <div className={floatMenuStyles.menuHeader}>
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
        <div className={floatMenuStyles.menuWrapper}>
          <Accordion title={'Products'}>
            <ProductListMenu isMobile />
          </Accordion>
          {menuList.map(item => (
            <Link
              key={item.text}
              className={floatMenuStyles.menuItem}
              to={item.link}
            >
              {item.text}
            </Link>
          ))}
          <div className={floatMenuStyles.menuItem}>
            <LinkButton label='Log In' handleClick={handleLogin} />
          </div>
          <div className={floatMenuStyles.menuItem}>
            <LinkButton label='Get Started' handleClick={handleSignUp} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FloatMenu
