import React, { useState, useCallback, ReactElement } from 'react'
import { Link } from 'gatsby'

import { useDeviceDetect } from '~utils/hooks'
import ModalContainer from '~components/ModalContainer'

import headerMenuStyles from './HeaderMenu.module.css'
import FloatMenu from './FloatMenu'
import MenuToggle from './MenuToggle'
import DesktopProductsMenu from './DesktopProductsMenu'

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
    link: '/pricing',
    text: 'Pricing',
  },
  {
    link: '/blog',
    text: 'Blog',
  },
]

export default function HeaderMenu(): ReactElement {
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
