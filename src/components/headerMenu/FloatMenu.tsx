import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import floatMenuStyles from './FloatMenu.module.css'
import LinkButton from '~components/linkButton'
import Button from '~components/button'
import { MenuItem } from './index'

type Props = {
  handleLogin: () => void
  menuList: MenuItem[]
}

const FloatMenu: React.FC<Props> = ({ handleLogin, menuList }) => {
  useEffect(() => {
    document.body.classList.add('hide-scroll')
    return () => {
      document.body.classList.remove('hide-scroll')
    }
  })

  return (
    <>
      <div className={floatMenuStyles.root}>
        <div className={floatMenuStyles.menuWrapper}>
          {menuList.map(item => (
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
      <div className={floatMenuStyles.backgroundOverlay}></div>
    </>
  )
}
export default FloatMenu
