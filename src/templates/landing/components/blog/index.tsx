import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import ResourceItem from './resourceItem'
import Button from '../../../../components/button'
import DotsArtifact from '../../../../components/dot'
import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'

const styles = {
  root: {
    position: 'relative' as const,
    paddingTop: 50,
    paddingBottom: 116,
    background: `linear-gradient(180deg, rgba(246, 249, 251, 0) 0%, #F5F8FB 100%)`,
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(328px, 1fr))',
    columnGap: 56,
    padding: '86px 234px 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
  },
}

export default function Blog() {
  const images = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "landing/useful-resource1.png" }) {
          childImageSharp {
            fixed(width: 340, height: 292) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        second: file(relativePath: { eq: "landing/useful-resource2.png" }) {
          childImageSharp {
            fixed(width: 340, height: 292) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        third: file(relativePath: { eq: "landing/useful-resource3.png" }) {
          childImageSharp {
            fixed(width: 340, height: 292) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <div style={styles.root}>
      <SectionLabel text='BLOG' color='success' />
      <SectionTitle text='Useful Resources' />
      <div style={styles.list}>
        <ResourceItem
          imageTitle='Business Management'
          imageTitleColor={'#5D9A78'}
          image={images?.first?.childImageSharp?.fixed}
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
        <ResourceItem
          imageTitle='Business Management'
          imageTitleColor={'#ED7B73'}
          image={images.second.childImageSharp.fixed}
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
        <ResourceItem
          imageTitle='Business Management'
          imageTitleColor={'#E0B14B'}
          image={images.third.childImageSharp.fixed}
          title='Four Ways to Improve Mobile Workforce Productivity'
          text='Looking to increase productivity levels and improve compliance? This ebook will look at four ways you can equip your mobile...'
        />
      </div>

      <div style={styles.buttonContainer}>
        <Button
          className='primary-btn'
          label='Learn More'
          handleClick={() => {}}
        />
      </div>

      <DotsArtifact
        top={0}
        left={187}
        columns={8}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />

      <DotsArtifact
        top={804}
        right={22}
        columns={6}
        zIndex={1}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,
          0,1,0,0,1,0,
          0,1,0,0,0,0,
          0,0,0,0,0,1,
        ]}
      />
      <CircleArtifact
        name={CircleName.Violet}
        mainSize={38}
        centerSize={7.6}
        left='76.0625%'
        top={90}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={64}
        centerSize={11.43}
        left='6%'
        top={404}
      />
    </div>
  )
}
