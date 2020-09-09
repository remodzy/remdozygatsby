import React from 'react'
import { Link } from 'gatsby'

import floatMenuStyles from './FloatMenu.module.css'
import LinkButton from '~components/linkButton'
import Button from '~components/button'
import { MenuItem } from './index'
import Accordion from '~components/accordion'
import ProductListMenu from './ProductList'

type Props = {
  handleLogin: () => void
  menuList: MenuItem[]
}

const FloatMenu: React.FC<Props> = ({ handleLogin, menuList }) => {
  return (
    <>
      <div className={floatMenuStyles.root}>
        <div className={floatMenuStyles.menuWrapper}>
          <Accordion title={'Products'}>
            <ProductListMenu isMobile />
          </Accordion>
          {menuList.slice(1).map(item => (
            <Link className={floatMenuStyles.menuItem} to={item.link}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className={floatMenuStyles.buttonsContainer}>
          <div className={floatMenuStyles.buttonWrapper}>
            <Button
              label='Get Started'
              className='primary-btn'
              handleClick={() => {}}
            />
          </div>
          <LinkButton label='Log In' handleClick={handleLogin} />
        </div>
      </div>
      <div className={floatMenuStyles.backgroundOverlay}>
        <div
          style={{ width: '100%', height: '100%', background: '#ffffff' }}
        ></div>
      </div>
    </>
  )
}
export default FloatMenu
