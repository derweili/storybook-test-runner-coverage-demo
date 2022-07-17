import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const ChevronUpIcon: React.FC<Props> = () => (
  <SvgIcon
    displayName={IconName.ChevronUpIcon}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </SvgIcon>
)

export default ChevronUpIcon
