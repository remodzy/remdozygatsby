import { useLocation } from '@reach/router'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { ReactElement, useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'

import ModalContainer from '~components/ModalContainer'
import { isSSR } from '~utils/hooks'

import DesktopProductsMenu from './DesktopProductsMenu'
import FloatMenu from './FloatMenu'
import * as styles from './HeaderMenu.module.css'
import MenuToggle from './MenuToggle'

export type MenuItem = {
  link: string
  text: string
  isButton: boolean
  isLinkButton: boolean
}

export type ContentfulMenuItem = {
  id: string
  order: number
  name: string
  url: string
  isButton: boolean
  isLinkButton: boolean
  showAt: Array<string>
}

export default function HeaderMenu(): ReactElement {
  const [show, setShow] = useState(false)

  const { pathname } = useLocation()

  const items = useStaticQuery(query)
  const menuItems = prepareHeaderItems(
    items.allContentfulHeaderMenu.nodes,
    pathname
  )

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
            <FloatMenu menuList={menuItems} handleClose={handleClick} />
          </ModalContainer>
        )}
      </>
    )
  }

  return (
    <div className={styles.root}>
      <DesktopProductsMenu />
      {menuItems.map(item =>
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

const prepareHeaderItems = (
  items: Array<ContentfulMenuItem>,
  pathname: string
): Array<MenuItem> => {
  const menuItems: Array<MenuItem> = []
  items
    .sort((a, b) => a.order - b.order)
    .forEach(item => {
      if (!item.showAt || item.showAt.indexOf(pathname) !== -1)
        menuItems.push({
          link: item.url,
          text: item.name,
          isButton: item.isButton,
          isLinkButton: item.isLinkButton,
        })
    })
  return menuItems
}

export const query = graphql`
  query allContentfulHeaderMenuQuery {
    allContentfulHeaderMenu {
      nodes {
        id
        order
        name
        url
        isButton
        isLinkButton
        showAt
      }
    }
  }
`
