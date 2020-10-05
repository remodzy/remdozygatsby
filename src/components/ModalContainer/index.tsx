import React, { ReactElement } from 'react'
import { createPortal } from 'react-dom'

import { usePortal } from '~utils/hooks'

type Props = {
  children: ReactElement | ReactElement[]
}

export default function ModalContainer({ children }: Props) {
  const target = usePortal('modal-root')
  return createPortal(children, target)
}
