import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const ChevronRightIcon: React.FC<Props> = () => (
  <SvgIcon
    displayName={IconName.ChevronDown}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </SvgIcon>
)

export default ChevronRightIcon
