import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import React, { FC, ReactElement } from 'react'

import { ListItem } from '~components/RGrid'
import { createMarkup } from '~utils/createMarkup'

import * as styles from './InfoBlock.module.css'
import { Link } from 'gatsby'

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
          dangerouslySetInnerHTML={createMarkup(
            typeof label === 'string' ? label : documentToHtmlString(label)
          )}
        />
      )}
    </div>
    <div
      className={styles.title}
      dangerouslySetInnerHTML={createMarkup(
        typeof title === 'string' ? title : documentToHtmlString(title)
      )}
    />
    <div
      className={styles.text}
      dangerouslySetInnerHTML={createMarkup(
        typeof text === 'string' ? text : documentToHtmlString(text)
      )}
    />
    <div className={styles.footer}>
      <Link
        className='btn primary-btn'
        to={link}
        style={{
          textDecoration: 'none',
          background: colors?.background,
          color: colors?.text,
        }}
      >
        {learnMoreText || 'Learn More'}
      </Link>
      {ExtraItem && <ExtraItem />}
    </div>
  </div>
)

export default InfoBlock
