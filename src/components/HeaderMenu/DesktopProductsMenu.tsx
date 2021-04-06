import React, {
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Icon from '~components/Icons'
import { useOnClickOutside } from '~utils/hooks'

import * as styles from './DesktopProductsMenu.module.css'
import ProductListMenu from './ProductList'

const DesktopProductsMenu = () => {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>

  const [open, setOpen] = useState(false)

  const showDropdown = () => {
    setOpen(true)
  }
  const hideDropdown = () => {
    setOpen(false)
  }

  useOnClickOutside([buttonRef, menuRef], hideDropdown, open)

  useLayoutEffect(() => {
    if (buttonRef.current && menuRef.current) {
      const { top } = buttonRef.current.getBoundingClientRect()
      menuRef.current.style.paddingTop = `${top - 15}px`
    }
  })

  const iconColor = open ? '#4864EB' : ''

  return (
    <>
      <button
        ref={buttonRef}
        className={`${styles.rootTitle} ${open ? styles.active : ''}`}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <span className={styles.title}>Products</span>
        <span className={open ? styles.expandedMenu : styles.collapsedMenu}>
          <Icon className={styles.svgIcon} name='arrow' color={iconColor} />
        </span>
        <div
          ref={menuRef}
          className={`${styles.rootContainer} ${
            open ? styles.rootContainerVisible : ''
          }`}
        >
          <div className={`${styles.rootMenu} rootMenu`}>
            <ProductListMenu />
          </div>
        </div>
      </button>
    </>
  )
}

export default DesktopProductsMenu
