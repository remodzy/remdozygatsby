import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
import * as React from 'react'

import Layout from '~components/Layout'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
// import SocialShare from '~components/SocialShare'
import { createMarkup } from '~utils/createMarkup'
import { useDeviceDetect } from '~utils/hooks'

import * as styles from './RichText.module.css'

type Props = {
  pageContext: {
    title: string
    document: Document
  }
}

const RichTextLayout: React.FC<Props> = ({
  pageContext: { title, document },
}) => {
  const { isMobile } = useDeviceDetect()

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
