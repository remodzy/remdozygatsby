import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ServiceRow from './ServiceRow'
import { getConfigList } from './listConfig'
import serviceListStyles from './ServiceList.module.css'

export type ListItem = {
  key: string
  title: string
  text: string
  paddingTop?: number
  paddingRight?: string
  paddingLeft?: string
  color: {
    group: string
    color: string
  }
  buttonLabel: string
  imageSize: number
  OutDesktopArtifacts: () => ReactElement<any, any>
  InDesktopArtifacts: () => ReactElement<any, any>
  OutMobileArtifacts: () => ReactElement<any, any>
  InMobileArtifacts: () => ReactElement<any, any>
}

export default function ServiceList() {
  const images = useStaticQuery(query)

  const list = getConfigList()

  return (
    <div key='service-list' className={serviceListStyles.root}>
      {list.map((item, index) => (
        <ServiceRow key={item.key} images={images} item={item} index={index} />
      ))}
    </div>
  )
}

const query = graphql`
  query {
    service1Map: file(relativePath: { eq: "lading/service1/map.png" }) {
      childImageSharp {
        fluid(maxWidth: 696) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    service1MapDate: file(
      relativePath: { eq: "lading/service1/map-date.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 199) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    settings: file(relativePath: { eq: "service/service-first.png" }) {
      childImageSharp {
        fluid(maxWidth: 766) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    calendar: file(relativePath: { eq: "service/service-second.png" }) {
      childImageSharp {
        fluid(maxWidth: 789) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    communicate: file(relativePath: { eq: "service/service-third.png" }) {
      childImageSharp {
        fluid(maxWidth: 682) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    messaging: file(relativePath: { eq: "service/service-fourth.png" }) {
      childImageSharp {
        fluid(maxWidth: 754) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    settingsIcon: file(relativePath: { eq: "service/icons/settings.png" }) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    calendarIcon: file(relativePath: { eq: "service/icons/calendar.png" }) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    communicateIcon: file(relativePath: { eq: "service/icons/worker.png" }) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    messagingIcon: file(relativePath: { eq: "service/icons/messaging.png" }) {
      childImageSharp {
        fixed(width: 24) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
