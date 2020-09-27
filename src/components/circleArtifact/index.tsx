import React, { ReactElement } from 'react'

import { getStyles, Props } from './utils'

export { CircleName } from './utils'

export const CircleArtifact: React.FC<Props> = (
  props
): ReactElement<any, any> => {
  const styles = getStyles(props)

  return (
    <div style={styles.root}>
      <div style={styles.center}></div>
    </div>
  )
}
