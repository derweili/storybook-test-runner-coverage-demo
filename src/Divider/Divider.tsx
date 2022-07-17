import React from 'react'
import { Size } from '@mycompany/design-system/Styleguide'
import DividerRoot from './DividerRoot'
import { Orientation, Display } from './types'

type Props = {
  orientation?: Orientation
  flexItem?: boolean
  display?: Display
  spacing?: Size
  inverted?: boolean
}

const defaultOrientation = Orientation.Horizontal
const defaultDisplay = Display.FullWidth
const defaultSpacing = Size.Medium

const Divider: React.FC<Props> = React.forwardRef<HTMLHRElement, Props>(
  (
    {
      orientation = defaultOrientation,
      flexItem = false,
      display = defaultDisplay,
      spacing = defaultSpacing,
      inverted = false,
    }: Props,
    ref
  ) => (
    <DividerRoot
      ref={ref}
      orientation={orientation}
      flexItem={flexItem}
      display={display}
      spacing={spacing}
      inverted={inverted}
    />
  )
)

export default Divider
