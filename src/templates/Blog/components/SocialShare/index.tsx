import React from 'react'
import IconButton from '~components/IconButton'
import { useDeviceDetect } from '~utils/hooks'
import styles from './SocialShare.module.css'

export default function SocialShare() {
  const { isMobile } = useDeviceDetect()
  const size = isMobile ? 40 : 56

  return (
    <div className={styles.root}>
      <div className={styles.title}>Share</div>
      <IconButton iconName='facebook' size={size} handleClick={() => {}} />
      <IconButton iconName='twitter' size={size} handleClick={() => {}} />
      <IconButton iconName='linkedin' size={size} handleClick={() => {}} />
    </div>
  )
}
