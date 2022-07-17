import React, { FC } from 'react'
import styled from 'styled-components'
import { ElevationLevel, Size, Variant } from '../Styleguide'

type LayoutItemProps = {
  elevationLevel?: ElevationLevel
  spacing?: Size
  stackLevel?: number
  variant?: Variant
}

export const Layout: FC = ({ children }) => <>{children}</>

export const LayoutItem: FC<LayoutItemProps> = styled.div<LayoutItemProps>`
  background-color: ${({ theme: { color }, variant }) =>
    (variant && color.variant[variant].base.hex()) ||
    color.contentBackground.hex()};
  box-shadow: ${({ elevationLevel, theme }) =>
    typeof elevationLevel === 'string' && theme.elevation[elevationLevel]};
  padding: ${({ spacing, theme }) =>
      spacing && theme.spacing.size[spacing].px()}
    0;
  position: ${({ stackLevel }) => typeof stackLevel === 'number' && 'relative'};
  z-index: ${({ stackLevel }) => typeof stackLevel === 'number' && stackLevel};
`
