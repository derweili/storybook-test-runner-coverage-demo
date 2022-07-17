import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const FaceBookIcon: React.FC<Props> = ({social}:Props) => (
  <SvgIcon
    viewBox="0 0 48 48"
    displayName={IconName.FaceBookIcon}
    strokeLinecap="round"
    strokeLinejoin="round"
    social={social}
  >
    <g style={{ clipPath: 'url(#a)' }}>
      <path
        d="M48 24a24 24 0 1 0-27.8 23.7V31h-6v-7h6v-5.3c0-6 3.6-9.3 9.1-9.3 2.6 0 5.4.4 5.4.4v6h-3c-3 0-4 1.8-4 3.7V24h6.7l-1 7h-5.6v16.7A24 24 0 0 0 48 24Z"
        fill="#1877F2"
      />
      <path
        d="m33.3 31 1.1-7h-6.6v-4.5c0-1.9.9-3.7 3.9-3.7h3v-6s-2.8-.4-5.4-.4c-5.5 0-9 3.3-9 9.3V24h-6.1v7h6v16.7a24.2 24.2 0 0 0 7.6 0V31h5.5Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
)

export default FaceBookIcon
