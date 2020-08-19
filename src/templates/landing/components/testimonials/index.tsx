import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import SectionLabel from '../sectionLabel'
import SectionTitle from '../sectionTitle'
import { getTextColor } from '../../../../utils/colors'
import Icon from '../../../../components/icons'

const textColors = getTextColor()

const styles = {
  root: {
    paddingTop: '136px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '130px 190px 225px 0',
  },
  text: {
    fontWeight: 600,
    fontSize: 27,
    lineHeight: '50px',
    color: textColors.main,
  },
  author: {
    fontWeight: 600,
    fontSize: 23,
    lineHeight: '50px',
    color: textColors.main,
    marginTop: 30,
  },
  work: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: '182.3%',
    color: textColors.sub,
  },
}

export default function Testimonials() {
  const images = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "landing/testimonials-1.png" }) {
          childImageSharp {
            fixed(width: 724, height: 570) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        second: file(relativePath: { eq: "landing/testimonials-2.png" }) {
          childImageSharp {
            fixed(width: 170) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <div style={styles.root}>
      <SectionLabel text='testimonials' color='success' />
      <SectionTitle text='What People Say' />
      <div style={styles.container}>
        <div
          style={{
            padding: '66px 0 0 68px',
            maxWidth: 435,
            position: 'relative',
            marginTop: 140,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <Icon name='paragraph' />
          </div>
          <div style={styles.text}>
            Capture job notes, photos and signatures from the field in the
            technician mobile app.
          </div>
          <div style={styles.author}>Jon Thomas</div>
          <div style={styles.work}>CEO, Dell</div>
        </div>
        <div>
          <Img fixed={images.first.childImageSharp.fixed} />
        </div>
      </div>
    </div>
  )
}
