import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import React, { FC, ReactElement } from 'react'

import { ListItem } from '~components/RGrid'
import { createMarkup } from '~utils/createMarkup'

import * as styles from './InfoBlock.module.css'

type Props = ListItem

const InfoBlock: FC<Props> = ({
  colors = {},
  icon: Icon,
  label,
  title,
  text,
  link,
  learnMoreText,
  extraItem: ExtraItem,
}): ReactElement => (
  <div className={styles.root}>
    <div className={styles.iconContainer}>
      <Icon />
      {label && (
        <span
          className={styles.label}
          dangerouslySetInnerHTML={createMarkup(documentToHtmlString(label))}
        />
      )}
    </div>
    <div
      className={styles.title}
      dangerouslySetInnerHTML={createMarkup(documentToHtmlString(title))}
    />
    <div
      className={styles.text}
      dangerouslySetInnerHTML={createMarkup(documentToHtmlString(text))}
    />
    <div className={styles.footer}>
      <a
        className='btn primary-btn'
        href={link}
        style={{
          textDecoration: 'none',
          background: colors?.background,
          color: colors?.text,
        }}
      >
        {learnMoreText || 'Learn More'}
      </a>
      {ExtraItem && <ExtraItem />}
    </div>
  </div>
)

export default InfoBlock
