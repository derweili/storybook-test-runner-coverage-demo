import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const BurgerIcon: React.FC<Props> = ({ fill }: Props) => (
  <SvgIcon
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    displayName={IconName.Burger}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </SvgIcon>
)

export default BurgerIcon
