import React from 'react'

import Icon from '../icons'
import iconButtonStyles from './IconButton.module.css'

type Props = {
  handleClick: () => void
  iconName: string
}

const IconButton: React.FC<Props> = ({ handleClick, iconName }) => {
  return (
    <div onClick={handleClick} className={iconButtonStyles.root}>
      <Icon name={iconName} />
    </div>
  )
}

export default IconButton
