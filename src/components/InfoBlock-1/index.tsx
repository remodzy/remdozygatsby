import React, { ReactElement } from 'react'

import Button, { ButtonColors } from '~components/Button'

import IconWrapper from '../IconWrapper'
import infoBlockStyles from './InfoBlock.module.css'

type Props = {
  item: {
    color: ButtonColors
    title: string
    text: string
    buttonLabel?: string
  }
  isEven?: boolean
  icon: () => ReactElement
}

export default function InfoBlock({
  item,
  isEven,
  icon: Icon,
}: Props): ReactElement {
  const { color, title, text, buttonLabel = 'Learn More' } = item
  const buttonColors: ButtonColors = color

  return (
    <div
      className={infoBlockStyles.root}
      style={{
        justifySelf: isEven ? 'flex-start' : 'flex-end',
      }}
    >
      <IconWrapper color={color.background}>
        <Icon />
      </IconWrapper>
      <div className={infoBlockStyles.title}>{title}</div>
      <div className={infoBlockStyles.text}>{text}</div>
      <Button
        colors={buttonColors}
        label={buttonLabel}
        handleClick={() => {}}
      />
    </div>
  )
}
