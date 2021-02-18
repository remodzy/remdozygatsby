import React, {
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import Icon from '~components/Icons'
import { useOnClickOutside } from '~utils/hooks'

import styles from './DesktopProductsMenu.module.css'
import ProductListMenu from './ProductList'

const DesktopProductsMenu = () => {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  useOnClickOutside([buttonRef, menuRef], handleClick, open)

  useLayoutEffect(() => {
    if (buttonRef.current && menuRef.current) {
      const { top } = buttonRef.current.getBoundingClientRect()
      menuRef.current.style.top = `${top + 27}px`
    }
  })

  const iconColor = open ? '#4864EB' : ''

  return (
    <>
      <button
        ref={buttonRef}
        className={`${styles.rootTitle} ${open ? styles.active : ''}`}
        onClick={handleClick}
      >
        <span className={styles.title}>Products</span>
        <span className={open ? styles.openedMenu : ''}>
          <Icon name='arrow' color={iconColor} />
        </span>
      </button>
      {open && (
        <div ref={menuRef} className={styles.rootMenu}>
          <ProductListMenu />
        </div>
      )}
    </>
  )
}

export default DesktopProductsMenu
