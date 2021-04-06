import React, { FC, ReactElement } from 'react'

import PrimarySubtitle from '~components/PrimarySubtitle'
import RSectionTitle from '~components/RSectionTitle'
import RSection from '~components/RSection'
import { AnimatedWord } from '~components/AnimatedWord'

import Artifacts from './Artifacts'
import * as styles from './PrimaryBlock.module.css'

const Cover: FC<unknown> = (): ReactElement => <div className={styles.cover} />

const PrimaryBlock: FC<unknown> = (): ReactElement => (
  <RSection cover={Cover} artifacts={Artifacts}>
    <div className={styles.wrapper}>
      <RSectionTitle>
        We Build{' '}
        <AnimatedWord
          words={['Intuitive', 'Smart', 'Simple']}
          colors={['#e19763', '#cf7020', '#cbb542']}
        />{' '}
        Products
        <br />
        For{' '}
        <AnimatedWord
          words={['Great', 'Fast', 'Huge']}
          colors={['#4864eb', '#758ef5', '#0729cb']}
        />{' '}
        Teams
      </RSectionTitle>
      <PrimarySubtitle>
        Unique and powerful suite of software to run your entire business,
        brought to you by a company with the long term vision to transform the
        way you work.
      </PrimarySubtitle>
    </div>
  </RSection>
)

export default PrimaryBlock
