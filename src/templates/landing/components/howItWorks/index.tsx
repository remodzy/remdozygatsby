import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { CircleArtifact, CircleName } from '~components/circleArtifact'
import DotsArtifact from '~components/dot'
import BlockWrapper from '~components/blockWrapper'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import { Item } from './item'
import styles from './HowItWorks.module.css'
import { DeviceDetectContext } from '~components/layout'

export default function HowItWorks() {
  const { isMobile } = useContext(DeviceDetectContext)
  const images = useStaticQuery(query)
  return (
    <div className={styles.root}>
      <BlockWrapper>
        <SectionLabel text='How it works' color='warning' />
        <SectionTitle text='How Remodzy Service works' />
        <div className={styles.itemsContainer}>
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
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

const query = graphql`
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
`

function InMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={160}
        right={10.22}
        columns={2}
        zIndex={1}
        size={3}
        gap={10.22}
        // prettier-ignore
        list={[
          1,0,
          0,0,
          0,0,
          0,1,
          0,0,
          0,0,
          0,1,
          0,0,
        ]}
      />
      <DotsArtifact
        top={700}
        left={13.57}
        columns={3}
        zIndex={1}
        size={3}
        gap={18.57}
        // prettier-ignore
        list={[
          0,0,0,
          0,1,0,
          0,1,0,
          0,0,0,
        ]}
      />
      <DotsArtifact
        top={770}
        right={14.64}
        columns={2}
        zIndex={1}
        size={3.9}
        gap={18.57}
        // prettier-ignore
        list={[
          0,1,
          0,0,
          0,0,
          1,0,
        ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={62}
        centerSize={12.4}
        left='-8.27%'
        top={340}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='88%'
        top={490}
      />
    </>
  )
}

function OutMobileArtifacts() {
  return (
    <>
      <DotsArtifact
        top={-80}
        left={11.31}
        columns={3}
        zIndex={1}
        size={4.07}
        gap={19.38}
        // prettier-ignore
        list={[
          0,0,0,
          0,0,1,
          0,0,1,
          1,0,0,
          0,0,0,
          0,0,0,
          1,1,0,
          0,0,0,
        ]}
      />
    </>
  )
}

function InDesktopArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={40}
        centerSize={8}
        left='69.1875%'
        top={23}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='11.25%'
        top={401}
      />
      <DotsArtifact
        top={55}
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
    </>
  )
}

function OutDesktopArtifacts() {
  return (
    <>
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
    </>
  )
}
