import React from 'react'
import Img, { FixedObject } from 'gatsby-image'

import { getColor } from '~utils/colors'
import Button, { ButtonColors } from '~components/button'

import IconWrapper from './IconWrapper'
import { ListItem } from './ServiceList'
import infoBlockStyles from './InfoBlock.module.css'

type Props = {
  item: ListItem
  isEven: boolean
  icon: FixedObject
}

export default function InfoBlock({ item, isEven, icon }: Props) {
  const color = getColor(item.color)

  const buttonColors: ButtonColors = {
    background: color.sub,
    text: color.main,
  }

  return (
    <div
      className={infoBlockStyles.root}
      style={{
        justifySelf: isEven ? 'flex-start' : 'flex-end',
      }}
    >
      <IconWrapper color={color.sub}>
        <Img fixed={icon} loading='eager' />
      </IconWrapper>
      <div className={infoBlockStyles.title}>{item.title}</div>
      <div className={infoBlockStyles.text}>{item.text}</div>
      <Button
        colors={buttonColors}
        label={item.buttonLabel}
        handleClick={() => {}}
      />
    </div>
  )
}
