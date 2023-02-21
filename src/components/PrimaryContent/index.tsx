import React, { FC, ReactElement, ReactNode, useCallback } from 'react'

import Button, { ButtonColors } from '~components/Button'
import Label from '~components/Label'
import PrimarySubtitle from '~components/PrimarySubtitle'
import RSection from '~components/RSection'
import RSectionTitle from '~components/RSectionTitle'
import { authorize } from '~utils/auth'

import {
  backgroundCover,
  bigMargin,
  buttonContainer,
  comingSoonLabel,
  imageWrapper,
  labelContainer,
  root,
  wrapper,
} from './PrimaryContent.module.css'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { injectIntl } from 'gatsby-plugin-react-intl'
import { IntlShape } from 'react-intl/src/types'

type Props = {
  title: string | ReactNode
  subTitle: string | ReactNode
  image?: IGatsbyImageData
  artifacts?: FC<unknown>
  comingSoon?: boolean
  doubleButtonMargins?: boolean
  hasCover?: boolean
  handleClick?: () => void
  buttonLabel?: string
  buttonColors?: ButtonColors
  creditCardInfo?: boolean
  intl: IntlShape
}

const Cover: FC<unknown> = (): ReactElement => (
  <div className={backgroundCover} />
)

const PrimaryContent: React.FC<Props> = ({
  title,
  subTitle,
  image,
  artifacts: Artifacts,
  comingSoon = false,
  doubleButtonMargins = false,
  hasCover = false,
  handleClick,
  buttonLabel = 'trial',
  buttonColors,
  creditCardInfo = true,
  intl,
}) => {
  const defaultHandleClick = useCallback(() => {
    authorize({ signUp: true })
  }, [])

  return (
    <RSection artifacts={Artifacts} {...(hasCover ? { cover: Cover } : {})}>
      <div className={root}>
        <div className={wrapper}>
          <RSectionTitle>{title}</RSectionTitle>
          <PrimarySubtitle>{subTitle}</PrimarySubtitle>

          <div
            className={`${buttonContainer} ${
              doubleButtonMargins ? bigMargin : ''
            }`}
          >
            {comingSoon && <div className={comingSoonLabel}>COMING SOON</div>}
            <Button
              label={intl.formatMessage({ id: buttonLabel })}
              {...(!comingSoon && !buttonColors
                ? {
                    className: 'primary-btn',
                  }
                : {})}
              {...(comingSoon
                ? {
                    colors: { text: '#ffffff', background: '#E19763' },
                  }
                : {})}
              {...(buttonColors ? { colors: buttonColors } : {})}
              handleClick={handleClick || defaultHandleClick}
            />
            {creditCardInfo && (
              <div className={labelContainer}>
                <Label text={intl.formatMessage({ id: 'no_credit_card' })} />
              </div>
            )}
          </div>
          {image && (
            <div
              className={`${imageWrapper} ${
                doubleButtonMargins ? bigMargin : ''
              }`}
            >
              <GatsbyImage image={image} alt='' />
            </div>
          )}
        </div>
      </div>
    </RSection>
  )
}

export default injectIntl(PrimaryContent)
