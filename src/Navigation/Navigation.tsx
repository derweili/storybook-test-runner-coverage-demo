import React from 'react'
import { Size } from '@mycompany/design-system/Styleguide'
import NavigationRoot from './NavigationRoot'

type Props = {
  orientation?: 'horizontal' | 'vertical'
  spacing?: Size | false
  size?: Size | false
  children: React.ReactNode
}

const defaultSpacing = Size.Medium
const defaultSize = Size.Medium

const Navigation = ({
  spacing = defaultSpacing,
  size = defaultSize,
  orientation,
  children,
}: Props) => (
  <NavigationRoot
    gridSpacing={spacing}
    gridSize={size}
    orientation={orientation}
  >
    {children}
  </NavigationRoot>
)

export default Navigation
