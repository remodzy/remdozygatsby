import React, { ReactElement, useCallback, useState } from 'react'
import { Link } from 'gatsby'

import ModalContainer from '~components/ModalContainer'
import { useDeviceDetect } from '~utils/hooks'
import { useLocation } from '@reach/router'

import DesktopProductsMenu from './DesktopProductsMenu'
import FloatMenu from './FloatMenu'
import headerMenuStyles from './HeaderMenu.module.css'
import MenuToggle from './MenuToggle'

export type MenuItem = {
  link: string
  text: string
}

const homeMenuList: MenuItem[] = [
  {
    link: '/support',
    text: 'Support',
  },
  {
    link: '/blog',
    text: 'Blog',
  },
]

const productMenuList: MenuItem[] = [
  {
    link: '/support',
    text: 'Support',
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

  const { pathname } = useLocation()

  let menuList = homeMenuList
  if (['/service/', '/forms/', '/flow/'].indexOf(pathname) !== -1)
    menuList = productMenuList

  const handleClick = useCallback(() => {
    setShow(!show)
  }, [show])

  if (isMobile) {
    return (
      <>
        <MenuToggle show={false} handleClick={handleClick} />
        {show && (
          <ModalContainer>
            <FloatMenu menuList={menuList} handleClose={handleClick} />
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
