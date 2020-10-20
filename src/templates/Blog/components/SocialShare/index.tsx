import React from 'react'
import IconButton from '~components/IconButton'
import styles from './SocialShare.module.css'

export default function SocialShare() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Social</div>
      <IconButton iconName='facebook' size={56} handleClick={() => {}} />
      <IconButton iconName='twitter' size={56} handleClick={() => {}} />
      <IconButton iconName='linkedin' size={56} handleClick={() => {}} />
    </div>
  )
}
