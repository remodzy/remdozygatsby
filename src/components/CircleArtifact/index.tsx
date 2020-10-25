import { ReactElement } from 'react'
import * as React from 'react'

import { getStyles, Props } from './utils'

export { CircleName } from './utils'

export const CircleArtifact: React.FC<Props> = (
  props
): ReactElement<any, any> => {
  const styles = getStyles(props)

  return (
    <i style={styles.root}>
      <i style={styles.center}></i>
    </i>
  )
}
