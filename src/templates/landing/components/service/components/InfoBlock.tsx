import React from 'react'
import Img, { FixedObject } from 'gatsby-image'

import { getColor, getTextColor } from '../../../../../utils/colors'
import Button, { ButtonColors } from '../../../../../components/button'
import IconWrapper from './IconWrapper'
import { ListItem } from './ServiceList'

const textColors = getTextColor()

const styles = {
  root: {
    maxWidth: 375,
    marginBottom: 195,
    position: 'relative' as const,
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: '49px',
    color: textColors.main,
    marginTop: 28,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '182.3%',
    color: textColors.sub,
    marginTop: 20,
    marginBottom: 24,
  },
}

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
      style={{
        ...styles.root,
        marginLeft: isEven ? 150 : 0,
        marginRight: !isEven ? 150 : 0,
      }}
    >
      <IconWrapper color={color.sub}>
        <Img fixed={icon} />
      </IconWrapper>
      <div style={styles.title}>{item.title}</div>
      <div style={styles.text}>{item.text}</div>
      <Button
        colors={buttonColors}
        label={item.buttonLabel}
        handleClick={() => {}}
      />
    </div>
  )
}
