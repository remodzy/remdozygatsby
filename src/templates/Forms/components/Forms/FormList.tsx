import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { useDeviceDetect } from '~utils/hooks'
import InfoBlock from '~components/InfoBlock'
import DotsArtifact from '~components/Dot'
import { CircleArtifact, CircleName } from '~components/CircleArtifact'

import formListStyles from './FormList.module.css'
import { FirstIcon, SecondIcon, ThirdIcon } from './Icons'

type RowProps = {
  image: FluidObject
  isMobile: boolean
  sizes: {
    infoBlock: number
    image: number
  }
}

const FormList = () => {
  const { first, second, third, mFirst, mSecond, mThird } = useStaticQuery(
    query
  )
  const { isMobile } = useDeviceDetect()
  const sizes = calculateBlockSizes(isMobile)

  return (
    <div className={formListStyles.root}>
      <FirstRow
        image={
          isMobile ? mFirst.childImageSharp.fluid : first.childImageSharp.fluid
        }
        isMobile={isMobile}
        sizes={sizes.first}
      />
      <SecondRow
        image={
          isMobile
            ? mSecond.childImageSharp.fluid
            : second.childImageSharp.fluid
        }
        isMobile={isMobile}
        sizes={sizes.second}
      />
      <ThirdRow
        image={
          isMobile ? mThird.childImageSharp.fluid : third.childImageSharp.fluid
        }
        isMobile={isMobile}
        sizes={sizes.third}
      />
    </div>
  )
}

export default FormList

const MobileBackgroundImage = () => (
  <div className={formListStyles.mobileBackground}></div>
)

const FirstRow: React.FC<RowProps> = ({ isMobile, image, sizes }) => (
  <div className={formListStyles.row}>
    <div className={formListStyles.infoBlockWrapper}>
      <InfoBlock
        icon={FirstIcon}
        isEven={false}
        item={{
          title: 'Setup checklist forms in minutes',
          text:
            'Convert your current paper checklists or Excel™ spreadsheets into smart inspection forms in minutes. Our drag and drop template builder makes it easy to create customized forms.',
          color: {
            background: '#EAF2EE',
            text: '#5B9976',
          },
        }}
      />
    </div>
    <Img
      fluid={image}
      style={{ width: '100%' }}
      className={formListStyles.image}
      loading='eager'
    />
    {!isMobile && (
      <>
        <div
          className={formListStyles.backgroundCircle}
          style={{ right: 68, bottom: 150 }}
        ></div>

        <DotsArtifact
          top={-35}
          right='3.3%'
          size={5}
          columns={8}
          // prettier-ignore
          list={[
        0,0,0,0,0,0,0,1,
        0,1,0,0,1,0,0,0,
        0,1,0,0,0,0,0,0,
        0,0,0,0,0,1,1,0,
      ]}
        />
        <DotsArtifact
          bottom={90}
          right='49.341875%'
          size={4}
          columns={4}
          gap={17.57}
          // prettier-ignore
          list={[
            1,0,0,0,
            0,0,0,0,
            0,0,0,1,
            0,1,0,0,
            0,0,0,0,
            0,0,0,0,
            0,1,1,0,
            0,0,0,0,
          ]}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={40}
          centerSize={8}
          left='27.1875%'
          bottom={65}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={40}
          centerSize={8}
          right='21.625%'
          bottom={0}
        />
      </>
    )}
    {isMobile && (
      <>
        <MobileBackgroundImage />
        <DotsArtifact
          top={43}
          left='1.928%'
          size={3}
          columns={7}
          gap={15.07}
          // prettier-ignore
          list={[
            0,0,0,0,0,0,1,
            1,0,0,0,1,0,0,
            1,0,0,0,0,0,0,
            0,
          ]}
        />
        <DotsArtifact
          top={340}
          right='2.973%'
          size={3}
          columns={6}
          gap={15.07}
          // prettier-ignore
          list={[
            0,0,0,0,0,0,
            0,1,0,0,1,0,
            0,1,0,0,0,0,
            0,0,0,0,0,1,
          ]}
        />
        <CircleArtifact
          name={CircleName.Purple}
          mainSize={28}
          centerSize={5.6}
          right='25.067%'
          bottom={50}
        />
      </>
    )}
  </div>
)

const SecondRow: React.FC<RowProps> = ({ isMobile, image, sizes }) => (
  <div className={formListStyles.row}>
    <Img
      fluid={image}
      style={{ width: '100%' }}
      className={formListStyles.image}
      loading='eager'
    />
    <div className={formListStyles.infoBlockWrapper}>
      <InfoBlock
        icon={SecondIcon}
        isEven
        item={{
          title: 'Add logic to make your forms smarter',
          text:
            'Make your inspections quicker and easier to complete by showing and hiding form fields as needed with an intuitive checklist software.',
          color: {
            background: '#DEDFED',
            text: '#5A60A6',
          },
        }}
      />
    </div>
    {!isMobile && (
      <>
        <div
          className={formListStyles.backgroundCircle}
          style={{ left: 109, bottom: 120 }}
        ></div>

        <DotsArtifact
          bottom={240}
          left='5.255%'
          size={4}
          columns={3}
          gap={17.57}
          // prettier-ignore
          list={[
        1,0,0,
        0,0,0,
        0,0,0,
        0,1,0,
        0,0,0,
        0,0,0,
        0,1,1,
        0,0,0,
      ]}
        />
        <DotsArtifact
          bottom={66}
          left='43.996875%'
          size={4.77}
          columns={4}
          gap={22.7}
          // prettier-ignore
          list={[
        0,0,0,0,
        0,0,1,0,
        1,0,0,0,
        1,0,0,0,
        0,0,0,1,
      ]}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={56}
          centerSize={11.2}
          left='27.1875%'
          bottom={-40}
        />
      </>
    )}
    {isMobile && (
      <>
        <MobileBackgroundImage />
        <DotsArtifact
          top={290}
          right='27.733%'
          size={3}
          columns={8}
          gap={14.43}
          zIndex={1}
          // prettier-ignore
          list={[
            0,1,0,0,0,0,0,0,
            0,0,0,0,0,1,1,0,
          ]}
        />
        <DotsArtifact
          bottom={-6}
          right='2.696%'
          size={3}
          columns={7}
          gap={14.03}
          zIndex={1}
          // prettier-ignore
          list={[
            0,1,1,0,0,0,0,
            0,0,0,0,0,0,1,
            0,0,0,1,0,0,1,
            1,0,0,0,0,0,0,
          ]}
        />
        <CircleArtifact
          name={CircleName.Blue}
          mainSize={54}
          centerSize={10.8}
          right='-7%'
          top={410}
        />
      </>
    )}
  </div>
)

const ThirdRow: React.FC<RowProps> = ({ isMobile, image, sizes }) => (
  <div className={formListStyles.row}>
    <div className={formListStyles.infoBlockWrapper}>
      <InfoBlock
        icon={ThirdIcon}
        isEven
        item={{
          title: 'Share reports immediately',
          text:
            'After an inspection is complete, an instant shareable report is generated. Share with the tap of a finger.',
          color: {
            background: '#F1E8F9',
            text: '#B98EE0',
          },
        }}
      />
    </div>
    <Img
      fluid={image}
      style={{ width: '100%' }}
      className={formListStyles.image}
      loading='eager'
    />
    {!isMobile && (
      <>
        <div
          className={formListStyles.backgroundCircle}
          style={{ right: 109, bottom: 105 }}
        ></div>
        <DotsArtifact
          bottom={75}
          right='25.979375%'
          size={4}
          columns={4}
          gap={17.8}
          // prettier-ignore
          list={[
          0,0,0,0,
          0,0,0,0,
          0,1,1,0,
          0,0,0,0,
        ]}
        />
        <CircleArtifact
          name={CircleName.Violet}
          mainSize={40}
          centerSize={8}
          left='34.6875%'
          bottom={100}
        />
      </>
    )}
    {isMobile && (
      <>
        <MobileBackgroundImage />
        <DotsArtifact
          top={269}
          right='20.776%'
          size={3}
          columns={4}
          gap={14.43}
          // prettier-ignore
          list={[
            0,1,0,0,
            0,0,0,0,
            0,0,0,0,
            0,1,1,0,
            0,0,0,0,
          ]}
        />
        <CircleArtifact
          name={CircleName.Green}
          mainSize={34}
          centerSize={6.8}
          right='26.667%'
          bottom={46}
        />
      </>
    )}
  </div>
)

export const desktopImage = graphql`
  fragment desktopImage on File {
    childImageSharp {
      fluid(maxWidth: 990) {
        ...GatsbyImageSharpFluid_noBase64
        # ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
export const mobileImage = graphql`
  fragment mobileImage on File {
    childImageSharp {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_noBase64
        # ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`

const query = graphql`
  query {
    first: file(relativePath: { eq: "forms/forms-first.png" }) {
      ...desktopImage
    }
    second: file(relativePath: { eq: "forms/forms-second.png" }) {
      ...desktopImage
    }
    third: file(relativePath: { eq: "forms/forms-third.png" }) {
      childImageSharp {
        fluid(maxWidth: 943) {
          ...GatsbyImageSharpFluid_noBase64
          # ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mFirst: file(relativePath: { eq: "forms/forms-first-m.png" }) {
      ...mobileImage
    }
    mSecond: file(relativePath: { eq: "forms/forms-second-m.png" }) {
      ...mobileImage
    }
    mThird: file(relativePath: { eq: "forms/forms-third-m.png" }) {
      ...mobileImage
    }
  }
`

function calculateBlockSizes(isMobile = false) {
  if (!isMobile) {
    return {
      first: {
        infoBlock: 100 - 990 / 16,
        image: 990 / 16,
      },
      second: {
        infoBlock: 100 - 990 / 16,
        image: 990 / 16,
      },
      third: {
        infoBlock: 100 - 943 / 16,
        image: 943 / 16,
      },
    }
  }
  return {
    first: {
      infoBlock: 100,
      image: 100,
    },
    second: {
      infoBlock: 100,
      image: 100,
    },
    third: {
      infoBlock: 100,
      image: 100,
    },
  }
}
