import { ReactElement } from 'react'
import * as React from 'react'
import blockWrapperStyles from './BlockWrapper.module.css'

type Props = {
  children: ReactElement | ReactElement[]
  styleWrapper?: React.CSSProperties
}

export default function BlockWrapper({ children, styleWrapper = {} }: Props) {
  return (
    <div className={blockWrapperStyles.root}>
      <div className={blockWrapperStyles.wrapper} style={styleWrapper}>
        {children}
      </div>
    </div>
  )
}
