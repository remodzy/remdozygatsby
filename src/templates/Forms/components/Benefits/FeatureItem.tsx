import * as React from 'react'

import IconWrapper from '~components/IconWrapper'

import featureItemStyles from './FeatureItem.module.css'

type Props = {
  title: string
  icon: any
}

export const FeatureItem: React.FC<Props> = ({ title, icon: Icon }) => (
  <div className={featureItemStyles.root}>
    <IconWrapper color='hsla(226, 74%, 59%, 0.2)'>
      <Icon />
    </IconWrapper>
    <div className={featureItemStyles.title}>{title}</div>
  </div>
)
