import React, { FC, ReactElement } from 'react'
import { useDeviceDetect } from '~utils/hooks'

const Artifacts: FC<unknown> = (): ReactElement => {
  const { isMobile } = useDeviceDetect()
  return isMobile ? <MobileArtifacts /> : <DesktopArtifacts />
}

export default Artifacts

function MobileArtifacts() {
  return <></>
}

function DesktopArtifacts() {
  return <></>
}
