import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const SearchIcon: React.FC<Props> = () => (
  <SvgIcon
    displayName={IconName.Search}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </SvgIcon>
)

export default SearchIcon
