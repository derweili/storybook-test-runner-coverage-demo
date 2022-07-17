import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const CheckboxUncheckedIcon: React.FC<Props> = ({ fill }: Props) => (
  <SvgIcon
    displayName={IconName.CheckboxUncheckedIcon}
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </SvgIcon>
)

export default CheckboxUncheckedIcon
