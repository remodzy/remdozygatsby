import * as React from 'react'

import Layout from '~components/Layout'
import RSection from '~components/RSection'
import SectionLabel from '~components/SectionLabel'
import { useDeviceDetect } from '~utils/hooks'
import { Document } from '@contentful/rich-text-types'

import styles from './Blog.module.css'
import SocialShare from '~components/SocialShare'
import RSectionTitle from '~components/RSectionTitle'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

type Props = {
  title: string
  document: Document
}

const RichTextLayout: React.FC<Props> = ({ title, document }) => {
  const { isMobile } = useDeviceDetect()

  return (
    <Layout>
      <RSection>
        <div className={styles.root}>
          <SectionLabel text={title} color='success' />
          <RSectionTitle>{title}</RSectionTitle>
          <div>
            <div className={styles.contentWrapper}>
              <div
                dangerouslySetInnerHTML={createMarkup(
                  documentToHtmlString(document)
                )}
              />
              <SocialShare />
            </div>
          </div>
        </div>
      </RSection>
      {!isMobile && <div className={styles.background} />}
    </Layout>
  )
}

export default RichTextLayout

function createMarkup(__html = '') {
  return { __html }
}
