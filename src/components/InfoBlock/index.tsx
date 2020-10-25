import * as React from 'react'

import { getColor } from '~utils/colors'
import Button, { ButtonColors } from '~components/Button'

import IconWrapper from '../IconWrapper'
import infoBlockStyles from './InfoBlock.module.css'

type Props = {
  item: {
    color: any
    title: string
    text: string
    buttonLabel?: string
  }
  isEven: boolean
  icon: () => React.ReactElement<any, any>
}

export default function InfoBlock({ item, isEven, icon: Icon }: Props) {
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
