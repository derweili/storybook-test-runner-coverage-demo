import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const CloseIcon: React.FC<Props> = ({ fill }: Props) => (
  <SvgIcon
    displayName={IconName.Close}
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line
      stroke={fill ? 'white' : 'currentColor'}
      x1="15"
      y1="9"
      x2="9"
      y2="15"
    />
    <line
      stroke={fill ? 'white' : 'currentColor'}
      x1="9"
      y1="9"
      x2="15"
      y2="15"
    />
  </SvgIcon>
)

export default CloseIcon
