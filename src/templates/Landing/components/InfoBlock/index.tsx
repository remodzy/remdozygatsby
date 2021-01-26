import React, { FC, ReactElement } from 'react'
import Button from '~components/Button'

import styles from './InfoBlock.module.css'

type Props = {
  icon: () => ReactElement
  label: string
  title: string
  text: string
  buttonLabel: string
  buttonHandler: () => void
  extraItem: () => ReactElement
}

const InfoBlock: FC<Props> = ({
  icon: Icon,
  label,
  title,
  text,
  buttonLabel,
  buttonHandler,
  extraItem: ExtraItem,
}): ReactElement => (
  <div className={styles.root}>
    <div className={styles.iconContainer}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <span className={styles.label}>
        <strong>rox</strong>
        {label}
      </span>
    </div>
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{text}</div>
    <div className={styles.footer}>
      <Button
        handleClick={buttonHandler}
        label={buttonLabel}
        className='primary-btn'
      />
      <ExtraItem />
    </div>
  </div>
)

export default InfoBlock

type IconWrapperProps = {
  children: ReactElement | ReactElement[]
}

function IconWrapper({ children }: IconWrapperProps): ReactElement {
  return <div className={styles.iconWrapper}>{children}</div>
}
