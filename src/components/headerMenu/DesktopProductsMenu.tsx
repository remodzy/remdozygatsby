import React, {
  useState,
  useRef,
  MutableRefObject,
  useEffect,
  RefObject,
  useCallback,
  useLayoutEffect,
} from 'react'
import Icon from '~components/icons'

import styles from './DesktopProductsMenu.module.css'
import ProductListMenu from './ProductList'

const DesktopProductsMenu = () => {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  useLayoutEffect(() => {
    if (buttonRef.current && menuRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect()
      menuRef.current.style.left = `${left - 138.5}px`
      menuRef.current.style.top = `${top + 40}px`
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
