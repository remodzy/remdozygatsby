import React from 'react'

import itemStyles from './Item.module.css'

type Props = {
  title?: string
  icon: any
  text: string
}

const Item: React.FC<Props> = ({ title, icon: Icon, text }) => {
  return (
    <div className={itemStyles.root}>
      <div className={itemStyles.imageWrapper}>
        <Icon />
      </div>
      <div className={itemStyles.title}>{title}</div>
      <div className={itemStyles.text}>{text}</div>
    </div>
  )
}

export default Item
