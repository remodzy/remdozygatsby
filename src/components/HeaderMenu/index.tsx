import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import { useDeviceDetect } from '~utils/hooks'

import headerMenuStyles from './HeaderMenu.module.css'
import FloatMenu from './FloatMenu'
import MenuToggle from './MenuToggle'
import DesktopProductsMenu from './DesktopProductsMenu'
import ModalContainer from '~components/ModalContainer'

export type MenuItem = {
  link: string
  text: string
}

const menuList: MenuItem[] = [
  {
    link: '/',
    text: 'Integrations',
  },
  {
    link: '/',
    text: 'Pricing',
  },
  {
    link: '/',
    text: 'Blog',
  },
]

export default function HeaderMenu() {
  const [show, setShow] = useState(false)
  const { isMobile } = useDeviceDetect()

  const handleClick = useCallback(() => {
    setShow(!show)
  }, [show])

  if (isMobile) {
    return (
      <>
        <MenuToggle show={false} handleClick={handleClick} />
        {show && (
          <ModalContainer>
            <FloatMenu
              show={show}
              menuList={menuList}
              handleClose={handleClick}
            />
          </ModalContainer>
        )}
      </>
    )
  }

  return (
    <div className={headerMenuStyles.root}>
      <DesktopProductsMenu />
      {menuList.map(item => (
        <Link key={item.text} className={headerMenuStyles.link} to={item.link}>
          {item.text}
        </Link>
      ))}
    </div>
  )
}
