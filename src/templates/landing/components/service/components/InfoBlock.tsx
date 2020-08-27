import React from 'react'
import Img from 'gatsby-image'

import IconWrapper from './IconWrapper'
import { getColor, getTextColor } from '../../../../../utils/colors'
import Button from '../../../../../components/button'

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

export default function InfoBlock({ item, isEven, icon }) {
  const color = getColor(item.color)

  const buttonColors = {
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
