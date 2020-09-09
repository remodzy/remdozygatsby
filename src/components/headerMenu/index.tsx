import React, { useContext, useState, useCallback } from 'react'
import { Link } from 'gatsby'

import { DeviceDetectContext } from '../layout'

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
    link: 'home',
    text: 'Integrations',
  },
  {
    link: 'home',
    text: 'Pricing',
  },
  {
    link: 'home',
    text: 'Blog',
  },
]

type Props = {
  handleLogin: () => void
}

export default function HeaderMenu({ handleLogin }: Props) {
  const [show, setShow] = useState(false)
  const { isMobile } = useContext(DeviceDetectContext)
  const handleClick = useCallback(() => {
    setShow(!show)
  }, [show])

  if (isMobile) {
    return (
      <>
        <MenuToggle show={show} handleClick={handleClick} />
        {show && <FloatMenu menuList={menuList} handleLogin={handleLogin} />}
      </>
    )
  }

  return (
    <div className={headerMenuStyles.root}>
      <DesktopProductsMenu menuList={[]} />
      {menuList.map(item => (
        <Link key={item.text} className={headerMenuStyles.link} to={item.link}>
          {item.text}
        </Link>
      ))}
    </div>
  )
}
