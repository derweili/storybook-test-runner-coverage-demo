import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const ChevronDownIcon: React.FC<Props> = () => (
  <SvgIcon
    displayName={IconName.ChevronDown}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </SvgIcon>
)

export default ChevronDownIcon
