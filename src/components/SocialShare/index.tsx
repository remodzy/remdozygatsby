import React from 'react'

import IconButton from '~components/IconButton'
import { useDeviceDetect } from '~utils/hooks'

import styles from './SocialShare.module.css'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

type Props = {
  title: string
  link: string
}
const SocialShare: React.FC<Props> = ({ title, link }) => {
  const { isMobile } = useDeviceDetect()
  const size = isMobile ? 40 : 56

  return (
    <div className={styles.root}>
      <div className={styles.title}>Share</div>
      <FacebookShareButton url={link} quote={title}>
        <IconButton iconName='facebook' size={size} handleClick={() => {}} />
      </FacebookShareButton>
      <TwitterShareButton url={link} title={title}>
        <IconButton iconName='twitter' size={size} handleClick={() => {}} />
      </TwitterShareButton>
      <LinkedinShareButton url={link}>
        <IconButton iconName='linkedin' size={size} handleClick={() => {}} />
      </LinkedinShareButton>
    </div>
  )
}

export default SocialShare
