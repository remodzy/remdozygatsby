import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
import { PageProps } from 'gatsby'
import * as React from 'react'
import { isMobile } from 'react-device-detect'

import Layout from '~components/Layout'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
// import SocialShare from '~components/SocialShare'
import { createMarkup } from '~utils/createMarkup'

import * as styles from './RichText.module.css'

type Props = PageProps & {
  pageContext: {
    title: string
    document: Document
  }
}

const RichTextLayout: React.FC<Props> = ({
  pageContext: { title, document },
}) => {
  return (
    <Layout>
      <RSection>
        <div className={styles.root}>
          <RSectionTitle>{title}</RSectionTitle>
          <div>
            <div className={styles.contentWrapper}>
              <div
                dangerouslySetInnerHTML={createMarkup(
                  documentToHtmlString(document)
                )}
              />
              {/*<SocialShare />*/}
            </div>
          </div>
        </div>
      </RSection>
      {!isMobile && <div className={styles.background} />}
    </Layout>
  )
}

export default RichTextLayout
