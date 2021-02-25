import * as React from 'react'

import IconButton from '../IconButton'

import styles from './HeaderMenu.module.css'

type Props = {
  show: boolean
  handleClick: () => void
}

const MenuToggle: React.FC<Props> = ({ show, handleClick }) => {
  const iconName = show ? 'cross' : 'hamburger'
  return (
    <IconButton
      handleClick={handleClick}
      iconName={iconName}
      className={styles.menuButton}
      color={'#4864EB'}
    />
  )
}

export default MenuToggle
