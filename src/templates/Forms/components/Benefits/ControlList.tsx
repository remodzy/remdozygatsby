import React, { ReactElement } from 'react'

import { ControlItem } from './ControlItem'
import styles from './ControlList.module.css'
import {
  AttachIcon,
  ChoiceIcon,
  DateTimeIcon,
  DropdownIcon,
  ElectronicSignatureIcon,
  LinkIcon,
  LocationIcon,
  NumberInputIcon,
  PhotoIcon,
  SelectionIcon,
  TableIcon,
  TextInputIcon,
  TextSelectionIcon,
} from './Icons'

const items = [
  { icon: ChoiceIcon, title: 'Multiple Choise' },
  { icon: ChoiceIcon, title: 'Single Choise' },
  { icon: SelectionIcon, title: 'Selection' },
  { icon: AttachIcon, title: 'Attach' },
  { icon: TextInputIcon, title: 'Text Input' },
  { icon: ElectronicSignatureIcon, title: 'Electronic Signature' },
  { icon: NumberInputIcon, title: 'Number Input' },
  { icon: LocationIcon, title: 'Location' },
  { icon: TextSelectionIcon, title: 'Text Selection' },
  { icon: DropdownIcon, title: 'Dropdown' },
  { icon: DateTimeIcon, title: 'Date & Time' },
  { icon: LinkIcon, title: 'Link' },
  { icon: PhotoIcon, title: 'Photo' },
  { icon: TableIcon, title: 'Table' },
]

const ControlList = (): ReactElement => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      {items.map(item => (
        <ControlItem key={item.title} {...item} />
      ))}
    </div>
  </div>
)

export default ControlList
