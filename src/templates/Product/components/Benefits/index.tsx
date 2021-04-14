import React, { FC, ReactElement } from 'react'

import RContainer from '~components/RContainer'
import { ListItem } from '~components/RGrid'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import SectionLabel from '~components/SectionLabel'

import { root } from './Benefits.module.css'
import ControlList from './ControlList'

type Props = {
  title: string
  list: ListItem[]
  artifacts?: () => ReactElement
}

const Benefits: FC<Props> = ({
  title,
  list,
  artifacts: Artifacts,
}): ReactElement => (
  <RSection artifacts={Artifacts}>
    <RContainer>
      <div className={root}>
        <SectionLabel text='Benefits' color='primary' />
        <RSectionTitle maxWidth={'100%'}>{title}</RSectionTitle>
        <ControlList
          items={list.map((item, index) => ({
            id: index.toString(),
            icon: item.icon,
            title: item.title,
            align: item.align,
            text: item.text,
          }))}
        />
      </div>
    </RContainer>
  </RSection>
)

export default Benefits
