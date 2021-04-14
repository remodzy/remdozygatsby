import React, { ReactElement } from 'react'

import { ControlItem, IControlItem } from './ControlItem'
import { root, wrapper } from './ControlList.module.css'

const ControlList = ({ items }: { items: IControlItem[] }): ReactElement => (
  <div className={root}>
    <div className={wrapper}>
      {items.map(item => (
        <ControlItem key={item.id} {...item} />
      ))}
    </div>
  </div>
)

export default ControlList
