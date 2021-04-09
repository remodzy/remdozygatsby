import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

import IconButton from '~components/IconButton'

import * as styles from './SocialShare.module.css'

type Props = {
  title: string
  link: string
}
const SocialShare: React.FC<Props> = ({ title, link }) => {
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
