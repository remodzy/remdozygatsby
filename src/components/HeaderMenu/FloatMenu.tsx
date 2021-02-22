import { Link } from 'gatsby'
import { useCallback } from 'react'
import * as React from 'react'

import Accordion from '~components/Accordion'
import Button from '~components/Button'
import LinkButton from '~components/LinkButton'
import Logo from '~components/Logo'
import { authorize } from '~utils/auth'

import floatMenuStyles from './FloatMenu.module.css'
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
        </div>
        <div className={floatMenuStyles.buttonsContainer}>
          <div className={floatMenuStyles.buttonWrapper}>
            <Button
              label='Get Started'
              className='primary-btn'
              handleClick={handleSignUp}
            />
          </div>
          <LinkButton label='Log In' handleClick={handleLogin} />
        </div>
      </div>
    </div>
  )
}
export default FloatMenu
