import React, { ReactElement } from 'react'

import sectionTitleStyles from './SectionTitle.module.css'

type Props = {
  text: string
}

export default function SectionTitle({ text }: Props): ReactElement {
  return <div className={sectionTitleStyles.root}>{text}</div>
}
