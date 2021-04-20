import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import DotsArtifact from '../Dot'
import Logo from '../Logo'
import RContainer from '../RContainer'
import * as styles from './AppFooter.module.css'
import FooterLink from './FooterLink'

export type FooterMenu = {
  id: string
  isHeader: boolean
  order: number
  name: string
  column: number
  url?: string
}
export type MenuItems = {
  [key: string]: {
    header: {
      [key: string]: FooterMenu
    }
    items: {
      [key: string]: FooterMenu
    }
  }
}
const prepareFooterItems = (items: FooterMenu[]): MenuItems => {
  const menuItems: MenuItems = {}
  items.forEach(item => {
    if (!menuItems[item.column])
      menuItems[item.column] = { header: {}, items: {} }
    if (item.isHeader) {
      menuItems[item.column].header[item.order] = item
    } else {
      menuItems[item.column].items[item.order] = item
    }
  })
  return menuItems
}

export default function Footer(): ReactElement {
  const items = useStaticQuery(query)
  const menuItems = prepareFooterItems(items.allContentfulFooterMenu.nodes)
  return (
    <footer className={styles.root}>
      <RContainer>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.linksContainer}>
            {Object.values(menuItems).map((item, index) => (
              <div key={index} className={styles.linkColumn}>
                {Object.values(item.header).map(header => (
                  <div key={header.id} className={styles.columnTitle}>
                    {header.name}
                  </div>
                ))}
                {Object.values(item.items).map(link => (
                  <FooterLink
                    key={link.id}
                    text={link.name}
                    url={link.url || '#'}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.copyrightContainer}>
          <span>© {new Date().getFullYear()}, ROXABO PTY LTD.</span>
        </div>
      </RContainer>
      {isMobile ? <MobileArtifacts /> : <DesktopArtifacts />}
    </footer>
  )
}

function MobileArtifacts() {
  return <></>
}
function DesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        bottom={0}
        left={11}
        columns={3}
        gap={18.7}
        size={3.99}
        // prettier-ignore
        list={[
        0,0,0,
        1,1,0,
        0,0,0,
        0,0,0,
        0,1,0,
        0,0,0,
        0,0,0,
      ]}
      />
      <DotsArtifact
        top={98}
        right={13}
        columns={5}
        size={3.93}
        gap={18.71}
        // prettier-ignore
        list={[
        0,0,0,0,0,
        0,1,0,0,1,
        0,1,0,0,0,
        0,0,0,0,0,
      ]}
      />
    </>
  )
}

export const query = graphql`
  query allContentfulFooterMenuQuery {
    allContentfulFooterMenu {
      nodes {
        id
        isHeader
        order
        name
        column
        url
      }
    }
  }
`
