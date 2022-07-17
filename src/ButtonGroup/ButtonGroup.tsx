import React from 'react'
import { Size, FlexboxJustification } from '@mycompany/design-system/Styleguide'
import ButtonGroupRoot from './ButtonGroupRoot'

type Props = React.PropsWithChildren<{
  justify?: FlexboxJustification
  squashed?: boolean
  spacing?: Size | false
}>

const defaultJustify = FlexboxJustification.FlexStart
const defaultSpacing = Size.Medium

const ButtonGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      squashed = false,
      justify = defaultJustify,
      spacing = defaultSpacing,
    }: Props,
    ref
  ) => (
    <ButtonGroupRoot
      squashed={squashed}
      justify={justify}
      ref={ref}
      elementSpacing={spacing}
    >
      {children}
    </ButtonGroupRoot>
  )
)

export default ButtonGroup
