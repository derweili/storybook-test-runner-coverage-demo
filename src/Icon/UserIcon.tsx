import { SvgIcon } from '@mycompany/design-system/Icon/base'
import React, { FC } from 'react'
import { IconName, Props } from './types'

const UserIcon: FC<Props> = ({ fill }) => (
  <SvgIcon
    fill={fill}
    viewBox="0 -1 24 24"
    displayName={IconName.User}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap={fill ? 'butt' : 'round'}
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </SvgIcon>
)

export default UserIcon
