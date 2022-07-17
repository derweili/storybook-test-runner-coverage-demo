import React from 'react'
import { Size, Variant } from '@mycompany/design-system/Styleguide'
import IconHoverRoot from './IconHoverRoot'

type Props = {
  spacing?: Size | 0
  children?: React.ReactNode
  variant?: Variant
}

const defaultSpacing = Size.Medium
const defaultVariant = Variant.Secondary

const IconHover: React.FC<Props> = ({
  children,
  variant = defaultVariant,
  spacing = defaultSpacing,
}: Props) => (
  <IconHoverRoot variant={variant} spacing={spacing}>
    {children}
  </IconHoverRoot>
)

export default IconHover
