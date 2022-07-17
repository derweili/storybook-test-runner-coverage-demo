import React from 'react'
import { SvgIcon } from './base'
import { IconName, Props } from './types'

const CartIcon: React.FC<Props> = ({ fill }: Props) => (
  <SvgIcon
    displayName={IconName.Cart}
    fill={fill}
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
<g id="Ebene_2" data-name="Ebene 2">
  <path d="M8.57,17.12a3,3,0,0,1-2.86-2.45s0-.06,0-.09C5.15,9.53,4.41,3.87,4.08,3a4.3,4.3,0,0,0-2.72-.33A1,1,0,1,1,1.09.57c.6-.08,3.64-.4,4.75,1.28a13.14,13.14,0,0,1,.81,3.52l15.69,0h0a1,1,0,0,1,1,1.24L21.8,14.7a3.32,3.32,0,0,1-3.21,2.41h-10Zm-.81-2.81a.9.9,0,0,0,.83.72h10a1.32,1.32,0,0,0,1.21-.73l1.32-6.87L7,7.45C7.2,9.3,7.47,11.58,7.76,14.31Z" style={{fill:"currentColor"}}/><path d="M8,23.75a2.86,2.86,0,1,1,2.85-2.85A2.86,2.86,0,0,1,8,23.75Zm0-3.83a1,1,0,1,0,1,1A1,1,0,0,0,8,19.92Z" style={{fill:"currentColor"}}/><path d="M19.51,23.75a2.86,2.86,0,1,1,2.85-2.85A2.86,2.86,0,0,1,19.51,23.75Zm0-3.83a1,1,0,1,0,1,1A1,1,0,0,0,19.51,19.92Z" style={{fill:"currentColor"}}/>
</g>
</SvgIcon>
)

export default CartIcon
