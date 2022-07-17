import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const PinterestIcon: React.FC<Props> = ({social}:Props) => (
  <SvgIcon
    viewBox="0 0 48 48"
    displayName={IconName.PinterestIcon}
    strokeLinecap="round"
    strokeLinejoin="round"
    social={social}
  >
    <path
      d="M24 0a24 24 0 0 0-8.7 46.4 23 23 0 0 1 0-7l2.9-11.9s-.8-1.4-.8-3.5c0-3.4 2-5.9 4.4-5.9 2 0 3 1.6 3 3.4 0 2-1.3 5.2-2 8C22.3 32 24 34 26.4 34c4.2 0 7.5-4.5 7.5-11 .1-6-4.1-10-9.9-10-6.8 0-10.8 5.1-10.8 10.4 0 2 .8 4.3 1.7 5.5.2.2.3.4.2.7l-.7 2.7c0 .4-.3.5-.8.3-3-1.4-4.8-5.8-4.8-9.3C8.7 16 14.2 9 24.5 9c8.4 0 14.8 6 14.8 13.9 0 8.2-5.2 14.9-12.4 14.9-2.5 0-4.7-1.3-5.5-2.8l-1.5 5.7c-.6 2.1-2 4.7-3 6.3a24 24 0 0 0 7.1 1 24 24 0 1 0 0-48Z"
      fill="#E71C27"
    />
  </SvgIcon>
)

export default PinterestIcon
