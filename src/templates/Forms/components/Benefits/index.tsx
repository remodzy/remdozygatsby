import React, { ReactElement } from 'react'

import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'

import styles from './Benefits.module.css'
import ControlList from './ControlList'
import RContainer from '~components/RContainer'
import SectionTitle from '~components/SectionTitle'

// export default function Benefits(): ReactElement {
//   return (
//     <RSection>
//       <div className={styles.root}>
//         <SectionLabel text='Benefits' color='primary' />
//         <RSectionTitle>Variety Of Controls</RSectionTitle>
//         <div className={styles.wrapper}>
//           <ControlList />
//         </div>
//       </div>
//     </RSection>
//   )
// }

const Benefits = (): ReactElement => (
  <RSection>
    <RContainer>
      <div className={styles.root}>
        <SectionLabel text='Benefits' color='primary' />
        <RSectionTitle>Variety Of Controls</RSectionTitle>
        <ControlList />
      </div>
    </RContainer>
  </RSection>
)

export default Benefits
