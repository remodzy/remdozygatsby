import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Icon from '~components/icons'
import DotsArtifact from '~components/dot'
import BlockWrapper from '~components/blockWrapper'
import { CircleArtifact, CircleName } from '~components/circleArtifact'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import testimonialsStyles from './Testimonials.module.css'
import { DeviceDetectContext } from '~components/layout'

export default function Testimonials() {
  const { isMobile } = useContext(DeviceDetectContext)
  const images = useStaticQuery(query)
  return (
    <div className={testimonialsStyles.root}>
      <BlockWrapper>
        <SectionLabel text='testimonials' color='success' />
        <SectionTitle text='What People Say' />
        <div className={testimonialsStyles.container}>
          <div className={testimonialsStyles.leftSide}>
            <div className={testimonialsStyles.iconWrapper}>
              <Icon name='paragraph' />
            </div>
            <div className={testimonialsStyles.text}>
              Capture job notes, photos and signatures from the field in the
              technician mobile app.
            </div>
            <div className={testimonialsStyles.author}>Jon Thomas</div>
            <div className={testimonialsStyles.work}>CEO, Dell</div>
          </div>
          <div className={testimonialsStyles.rightSide}>
            <Img
              fluid={images.first.childImageSharp.fluid}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        {isMobile ? <InMobileArtifacts /> : <InDesktopArtifacts />}
      </BlockWrapper>
      {isMobile ? <OutMobileArtifacts /> : <OutDesktopArtifacts />}
    </div>
  )
}

const query = graphql`
  query {
    first: file(relativePath: { eq: "landing/testimonials-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 724) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

function OutMobileArtifacts() {
  return (
    <DotsArtifact
      top={-40}
      left={28}
      columns={4}
      size={2.79}
      gap={13.28}
      zIndex={1}
      // prettier-ignore
      list={[
        1,0,0,0,
        0,0,0,1,
        0,0,0,1,
        0,1,0,0,
        0,0,0,0,
        0,0,0,0,
        0,1,1,0,
        0,0,0,0,
      ]}
    />
  )
}

function InMobileArtifacts() {
  return (
    <>
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={26}
        centerSize={5.2}
        left='83.73%'
        top={-25}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={26}
        centerSize={4.64}
        left='5.6%'
        top={320}
      />
      <DotsArtifact
        bottom={57}
        right={50}
        columns={4}
        size={2.79}
        gap={13.28}
        // prettier-ignore
        list={[
          1,0,0,0,
          0,0,0,1,
          0,0,0,1,
          0,1,0,0,
          0,0,0,0,
          0,0,0,0,
          0,1,1,0,
          0,0,0,0,
        ]}
      />
    </>
  )
}

function OutDesktopArtifacts() {
  return (
    <DotsArtifact
      top={190}
      left={26}
      columns={5}
      size={9.09}
      gap={43.34}
      // prettier-ignore
      list={[
      0,0,0,0,1,
      0,1,0,0,0,
      0,0,0,0,0,
      0,0,1,1,0,
    ]}
    />
  )
}

function InDesktopArtifacts() {
  return (
    <>
      <DotsArtifact
        top={230}
        right={439}
        columns={4}
        size={6.55}
        gap={31.21}
        // prettier-ignore
        list={[
      0,0,0,0,
      0,1,1,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0,
    ]}
      />
      <DotsArtifact
        top={850}
        left={355}
        columns={4}
        size={5.67}
        gap={27.01}
        // prettier-ignore
        list={[
      1,0,0,0,
      0,0,0,1,
      0,0,0,1,
      0,1,0,0,
      0,0,0,0,
      0,0,0,0,
    ]}
      />
      <CircleArtifact
        name={CircleName.Green}
        mainSize={32}
        centerSize={5.71}
        left='82.375%'
        top={48}
      />
      <CircleArtifact
        name={CircleName.Purple}
        mainSize={36}
        centerSize={7.2}
        left='60.1875%'
        top={884}
      />
    </>
  )
}
