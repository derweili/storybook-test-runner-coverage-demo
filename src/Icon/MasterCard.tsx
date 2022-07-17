import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const MasterCard: React.FC<Props> = ({ payments }: Props) => (
  <SvgIcon
    viewBox="0 0 50 30"
    displayName={IconName.MasterCard}
    strokeLinecap="round"
    strokeLinejoin="round"
    payments={payments}
  >
    <g style={{ opacity: 0 }}>
      <rect
        x="-0.02887"
        y="-1.55385"
        width="50.05774"
        height="33.10768"
        style={{ fill: '#fff' }}
      />
    </g>
    <rect
      x="18.39942"
      y="4.21427"
      width="13.20497"
      height="21.56761"
      style={{ fill: '#ff5f00' }}
    />
    <path
      d="M19.75954,15A13.69263,13.69263,0,0,1,24.9981,4.21808a13.7155,13.7155,0,1,0,0,21.56762A13.69263,13.69263,0,0,1,19.75954,15Z"
      style={{ fill: '#eb001b' }}
    />
    <path
      d="M45.87993,23.49978v-.44194h.1905V22.9664h-.45338v.09144h.17907v.44194Zm.88008,0V22.9664h-.13715l-.16.381-.16-.381h-.13716v.53338h.09906v-.40384l.14859.34669h.10286l.14858-.34669v.40384Z"
      style={{ fill: '#f79e1b' }}
    />
    <path
      d="M47.19053,15A13.71549,13.71549,0,0,1,24.9981,25.78189a13.71552,13.71552,0,0,0,0-21.56762,13.7155,13.7155,0,0,1,22.19243,10.7819Z"
      style={{ fill: '#f79e1b' }}
    />
  </SvgIcon>
)

export default MasterCard
