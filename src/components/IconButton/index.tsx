import React from 'react'

import Icon from '../Icons'
import * as styles from './IconButton.module.css'

type Props = {
  handleClick: () => void
  iconName: string
  size?: number
  color?: string
  className?: string
}

const IconButton: React.FC<Props> = ({
  handleClick,
  iconName,
  size,
  color,
  className,
}) => {
  const style = {
    width: size ?? 52,
    height: size ?? 52,
  }
  return (
    <div onClick={handleClick} className={styles.root} style={style}>
      <Icon name={iconName} color={color} className={className} />
    </div>
  )
}

export default IconButton
