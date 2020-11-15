import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '~components/Layout'
import SideBar from './components/Sidebar'

import styles from './ApiDocumentation.module.css'

type Props = {
  data: any
}

const ApiDocumentation: FC<Props> = ({ data }) => {
  return (
    <Layout isTiny>
      <div className={styles.root}>
        <SideBar />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default ApiDocumentation

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
