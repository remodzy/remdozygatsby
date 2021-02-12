import React, { ReactElement } from 'react'

import IconWrapper from '~components/IconWrapper'

import featureItemStyles from './FeatureItem.module.css'

type ItemProps = {
  title: string
  text: string
  icon: () => ReactElement
}

export const FeatureItem = ({
  title,
  text,
  icon: Icon,
}: ItemProps): ReactElement => (
  <div>
    <IconWrapper color='hsla(226, 74%, 59%, 0.2)'>
      <Icon />
    </IconWrapper>
    <div className={featureItemStyles.title}>{title}</div>
    <div className={featureItemStyles.text}>{text}</div>
  </div>
)
