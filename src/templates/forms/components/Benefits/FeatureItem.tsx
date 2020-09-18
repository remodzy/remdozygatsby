import React from 'react'

import IconWrapper from '~templates/shared/IconWrapper'

import featureItemStyles from './FeatureItem.module.css'

type Props = {
  title: string
  icon: any
}

export const FeatureItem: React.FC<Props> = ({ title, icon: Icon }) => (
  <div>
    <IconWrapper color='hsla(226, 74%, 59%, 0.2)'>
      <Icon />
    </IconWrapper>
    <div className={featureItemStyles.title}>{title}</div>
  </div>
)
