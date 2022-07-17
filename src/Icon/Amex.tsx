import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const Amex: React.FC<Props> = ({ payments }: Props) => (
  <SvgIcon
    viewBox="0 0 33 30"
    displayName={IconName.Amex}
    strokeLinecap="round"
    strokeLinejoin="round"
    payments={payments}
  >
    <path
      d="M26.29,7.28l1-2.66h4.47V-.22H1.18V30.34H31.74V25.51H27.52L26,23.69l-1.62,1.82h-12V15.8h-4L13.35,4.62h4.81l1.16,2.54V4.62h6l1,2.66ZM22.92,9V8L23.31,9l2,5.31h2l2-5.31L29.66,8v6.37h2.08V6.2H28.28l-1.56,4.14-.42,1.12-.43-1.12L24.29,6.2H20.84v8.15h2.08V9Zm-4.47,5.31h2.39L17.25,6.2H14.47l-3.6,8.15h2.36l.63-1.57h3.95l.64,1.57ZM15.43,9l.41-1,.41,1L17.09,11h-2.5L15.43,9ZM14,15.82v8.11h6.8V22.17H16.11V20.75h4.64V19H16.11V17.58h4.73V15.82Zm14.37,8.11h2.7L27.3,19.86l3.81-4H28.45L26,18.45l-2.44-2.63H20.84l3.8,4.07-3.8,4h2.63l2.47-2.65,2.47,2.65Zm1-4.08,2.31,2.34V17.54l-2.31,2.31Z"
      style={{ fill: '#006fcf' }}
    />
  </SvgIcon>
)

export default Amex
