import React, { ReactElement } from 'react'

import IconWrapper from '~components/IconWrapper'

import featureItemStyles from './FeatureItem.module.css'

type Props = {
  title: string
  icon: () => ReactElement
}

export const FeatureItem: React.FC<Props> = ({ title, icon: Icon }) => (
  <div className={featureItemStyles.root}>
    <IconWrapper color='rgba(73, 109, 228, .15)'>
      <Icon />
    </IconWrapper>
    <div className={featureItemStyles.title}>{title}</div>
  </div>
)
