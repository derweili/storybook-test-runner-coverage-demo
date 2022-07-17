import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const TwitterIcon: React.FC<Props> = ({social}:Props) => (
  <SvgIcon
    viewBox="0 0 48 48"
    displayName={IconName.TwitterIcon}
    strokeLinecap="round"
    strokeLinejoin="round"
    social={social}
  >
    <path d="M24 48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z" fill="#1B9DF0" />
    <path
      d="M19.6 36.7c10.7 0 16.5-8.9 16.5-16.5v-.7a11.9 11.9 0 0 0 2.9-3 11.7 11.7 0 0 1-3.4.9 5.8 5.8 0 0 0 2.6-3.2 11.7 11.7 0 0 1-3.7 1.4 5.8 5.8 0 0 0-4.2-1.9 5.8 5.8 0 0 0-5.8 5.8l.1 1.3c-4.8-.2-9-2.5-11.9-6a5.8 5.8 0 0 0-.8 2.9 5.8 5.8 0 0 0 2.6 4.8 5.7 5.7 0 0 1-2.6-.7 5.8 5.8 0 0 0 4.6 5.7 5.8 5.8 0 0 1-2.6.1 5.8 5.8 0 0 0 5.4 4 11.6 11.6 0 0 1-7.2 2.5h-1.3a16.1 16.1 0 0 0 8.8 2.6Z"
      fill="#fff"
    />
  </SvgIcon>
)

export default TwitterIcon
