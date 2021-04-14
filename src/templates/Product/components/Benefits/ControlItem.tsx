import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import React, { FC } from 'react'

import {
  root as rootStyle,
  text as textStyle,
  title as titleStyle,
} from './ControlItem.module.css'

export interface IControlItem {
  id: string
  title: Document | string
  text?: Document | string
  align?: 'left' | 'right' | 'center'
  icon: FC<unknown>
}

export const ControlItem: React.FC<IControlItem> = ({
  title,
  text,
  align = 'center',
  icon: Icon,
}) => (
  <div
    className={rootStyle}
    style={{
      alignItems:
        align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : '',
    }}
  >
    <Icon />
    <div className={titleStyle}>
      {typeof title === 'string' ? title : documentToReactComponents(title)}
    </div>
    {text && (
      <div className={textStyle} style={{ textAlign: align }}>
        {typeof text === 'string' ? text : documentToReactComponents(text)}
      </div>
    )}
  </div>
)
