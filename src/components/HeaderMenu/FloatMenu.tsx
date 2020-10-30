import { useCallback } from 'react'
import * as React from 'react'
import { Link } from 'gatsby'

import LinkButton from '~components/LinkButton'
import Button from '~components/Button'
import Accordion from '~components/Accordion'
import Logo from '~components/Logo'
import { authorize } from '~utils/auth'

import { MenuItem } from './index'
import ProductListMenu from './ProductList'
import floatMenuStyles from './FloatMenu.module.css'
import MenuToggle from './MenuToggle'

type Props = {
  show: boolean
  menuList: MenuItem[]
  handleClose: () => void
}

const FloatMenu: React.FC<Props> = ({ show, menuList, handleClose }) => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])
  const handleSignUp = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <div className={floatMenuStyles.root}>
      <div className={floatMenuStyles.backgroundOverlay}>
        <div className={floatMenuStyles.backgroundWrapper}></div>
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
          {menuList.slice(1).map(item => (
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
