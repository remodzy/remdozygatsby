import React from 'react'
import IconWrapper from '../IconWrapper'
import Icon from '../../../../../../components/icons'
import { getColor, getTextColor } from '../../../../../../utils/colors'
import Button from '../../../../../../components/button'

const textColors = getTextColor()

const styles = {
  root: {
    maxWidth: 375,
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

export default function InfoBlock({ item }) {
  const color = getColor(item.color)
  console.log(color)

  const buttonColors = {
    background: color.sub,
    text: color.main,
  }
  return (
    <div style={styles.root}>
      <IconWrapper color={color.sub}>
        <Icon name={item.icon} />
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
