import * as React from 'react'

import Icon from '../Icons'
import iconButtonStyles from './IconButton.module.css'

type Props = {
  handleClick: () => void
  iconName: string
  size?: number
}

const IconButton: React.FC<Props> = ({ handleClick, iconName, size }) => {
  const style = {
    width: size ?? 44,
    height: size ?? 44,
  }
  return (
    <div onClick={handleClick} className={iconButtonStyles.root} style={style}>
      <Icon name={iconName} />
    </div>
  )
}

export default IconButton
