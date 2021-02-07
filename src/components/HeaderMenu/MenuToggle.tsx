import * as React from 'react'

import IconButton from '../IconButton'

type Props = {
  show: boolean
  handleClick: () => void
}

const MenuToggle: React.FC<Props> = ({ show, handleClick }) => {
  const iconName = show ? 'cross' : 'hamburger'
  return <IconButton handleClick={handleClick} iconName={iconName} />
}

export default MenuToggle
