import React, { ReactElement } from 'react'
import { getTextColor } from '../../../../utils/colors'
import LinkButton from '../../../../components/linkButton'

type Props = {
  image?: any
  title: string
  text: string
}

const textColors = getTextColor()
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    fontSize: 23,
    lineHeight: '31px',
    fontWeight: 600,
    color: textColors.main,
    marginTop: 34,
  },
  text: {
    fontSize: 15,
    lineHeight: '182.3%',
    fontWeight: 500,
    color: textColors.sub,
    marginTop: 16,
  },
  linkContainer: {
    marginTop: 34,
  },
}

export default function ResourceItem({
  image,
  title,
  text,
}: Props): ReactElement<any, any> {
  return (
    <div style={styles.root}>
      <div style={styles.title}>{title}</div>
      <div style={styles.text}>{text}</div>
      <div style={styles.linkContainer}>
        <LinkButton label='Learn More' handleClick={() => {}} />
      </div>
    </div>
  )
}
