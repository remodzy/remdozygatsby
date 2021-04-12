import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import React, { ReactElement, useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'

import ModalContainer from '~components/ModalContainer'

import DesktopProductsMenu from './DesktopProductsMenu'
import FloatMenu from './FloatMenu'
import * as styles from './HeaderMenu.module.css'
import MenuToggle from './MenuToggle'
import { isSSR } from '~utils/hooks'

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

  const { pathname } = useLocation()

  let menuList = homeMenuList
  if (['/roxservice/', '/roxforms/', '/roxflow/'].indexOf(pathname) !== -1)
    menuList = productMenuList

  const handleClick = useCallback(() => {
    setShow(!show)
  }, [show])

  if (isSSR()) return <></>

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
    <div className={styles.root}>
      <DesktopProductsMenu />
      {menuList.map(item =>
        /^\/(?!\/)/.test(item.link) ? (
          <Link key={item.text} className={styles.link} to={item.link}>
            {item.text}
          </Link>
        ) : (
          <a
            key={item.text}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
            href={item.link}
          >
            {item.text}
          </a>
        )
      )}
    </div>
  )
}
