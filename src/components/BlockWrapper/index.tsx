import React, { ReactElement } from 'react'

import blockWrapperStyles from './styles.module.css'

type Props = {
  children: ReactElement | ReactElement[]
  styleWrapper?: React.CSSProperties
}

export default function BlockWrapper({
  children,
  styleWrapper = {},
}: Props): ReactElement {
  return (
    <div className={blockWrapperStyles.root}>
      <div className={blockWrapperStyles.wrapper} style={styleWrapper}>
        {children}
      </div>
    </div>
  )
}
