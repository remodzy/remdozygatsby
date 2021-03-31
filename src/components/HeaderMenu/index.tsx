import { useLocation } from '@reach/router'
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

const homeMenuList: MenuItem[] = [
  {
    link: '/support',
    text: 'Support',
  },
  {
    link: '//docs.roxabo.com',
    text: 'Docs',
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
    link: '//docs.roxabo.com',
    text: 'Docs',
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
  if (['/roxservice/', '/roxforms/', '/roxflow/'].indexOf(pathname) !== -1)
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
      {menuList.map(item =>
        /^\/(?!\/)/.test(item.link) ? (
          <Link
            key={item.text}
            className={headerMenuStyles.link}
            to={item.link}
          >
            {item.text}
          </Link>
        ) : (
          <a
            key={item.text}
            target='_blank'
            rel='noreferrer'
            className={headerMenuStyles.link}
            href={item.link}
          >
            {item.text}
          </a>
        )
      )}
    </div>
  )
}
