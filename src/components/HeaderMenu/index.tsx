import { Link } from 'gatsby'
import React, { ReactElement, useCallback, useState } from 'react'

import ModalContainer from '~components/ModalContainer'
import { useDeviceDetect } from '~utils/hooks'

import DesktopProductsMenu from './DesktopProductsMenu'
import FloatMenu from './FloatMenu'
import headerMenuStyles from './HeaderMenu.module.css'
import MenuToggle from './MenuToggle'

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
