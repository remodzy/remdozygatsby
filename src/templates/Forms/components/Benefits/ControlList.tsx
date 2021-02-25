import React, { ReactElement } from 'react'

import { ControlItem } from './ControlItem'
import styles from './ControlList.module.css'
import {
  AttachIcon,
  BarcodeScannerIcon,
  ChoiceIcon,
  CustomAIIcon,
  DateTimeIcon,
  DropdownIcon,
  ElectronicSignatureIcon,
  LinkIcon,
  LocationIcon,
  NumberInputIcon,
  PageBreakIcon,
  PhotoIcon,
  QRCodeScannerIcon,
  SelectionIcon,
  TableIcon,
  TextInputIcon,
  TextSelectionIcon,
  VideoIcon,
} from './Icons'

const items = [
  { icon: ChoiceIcon, title: 'Multiple Choise' },
  { icon: ChoiceIcon, title: 'Single Choise' },
  { icon: SelectionIcon, title: 'Section' },
  { icon: AttachIcon, title: 'Attachment' },
  { icon: TextInputIcon, title: 'Text Input' },
  { icon: ElectronicSignatureIcon, title: 'Electronic Signature' },
  { icon: NumberInputIcon, title: 'Number Input' },
  { icon: LocationIcon, title: 'Location' },
  { icon: TextSelectionIcon, title: 'Text Section' },
  { icon: DropdownIcon, title: 'Dropdown' },
  { icon: PhotoIcon, title: 'Photo' },
  { icon: VideoIcon, title: 'Video' },
  { icon: TableIcon, title: 'Table' },
  { icon: DateTimeIcon, title: 'Date & Time' },
  { icon: PageBreakIcon, title: 'Page Break' },
  { icon: CustomAIIcon, title: 'Custom A.I. Models' },
  { icon: QRCodeScannerIcon, title: 'QR code Scanner' },
  // { icon: LinkIcon, title: 'Link' },
  { icon: BarcodeScannerIcon, title: 'Barcode Scanner' },
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
