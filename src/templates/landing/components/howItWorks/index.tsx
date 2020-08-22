import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import { getTextColor } from '../../../../utils/colors'
import {
  CircleArtifact,
  CircleName,
} from '../../../../components/circleArtifact'
import DotsArtifact from '../../../../components/dot'

const textColors = getTextColor()

const styles = {
  root: { paddingTop: 155, position: 'relative' as const },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '100px 240px 0',
  },
  text: {
    fontSize: 23,
    fontWeight: 500,
    lineHeight: '31px',
    textAlign: 'center' as const,
    color: textColors.main,
    maxWidth: 306,
  },
}

export default function HowItWorks() {
  const images = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "landing/integrations-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 239) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      second: file(relativePath: { eq: "landing/integrations-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 239) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      third: file(relativePath: { eq: "landing/integrations-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 239) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div style={styles.root}>
      <SectionLabel text='How it works' color='warning' />
      <SectionTitle text='How Remodzy Service works' />
      <div style={styles.itemsContainer}>
        <Item
          image={images.first}
          size={239}
          text='Get an appointment confirmation and reminder via text message or email.'
        />
        <Item
          image={images.second}
          size={255}
          text='Receive a notification when the technician is on the way.'
        />
        <Item
          image={images.third}
          size={264}
          text='Once a job is complete, submit a rating and review of the job and technician.'
        />
      </div>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='69.1875%'
        top={178}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='11.25%'
        top={556}
      />
      <DotsArtifact
        top={229}
        left={52}
        columns={8}
        zIndex={1}
        size={4.19}
        gap={19.96}
        // prettier-ignore
        list={[
          0,0,0,0,0,0,0,1,
          0,1,0,0,1,0,0,0,
          0,1,0,0,0,0,0,0,
          0,0,0,0,0,1,1,0,
        ]}
      />
      <DotsArtifact
        top={316}
        right={22}
        columns={4}
        zIndex={1}
        size={6.26}
        gap={29.8}
        // prettier-ignore
        list={[
          0, 1, 1, 0,
          0, 0, 0, 0,
          0, 0, 0, 1,
          1, 0, 0, 0
        ]}
      />
    </div>
  )
}

function Item({ image, text, size }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Img
        fluid={image.childImageSharp.fluid}
        style={{ width: '100%', maxWidth: size }}
      />
      <div style={styles.text}>{text}</div>
    </div>
  )
}
