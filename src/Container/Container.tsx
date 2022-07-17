import React from 'react'
import { Size } from '@mycompany/design-system/Styleguide'
import { Behavior } from './types'
import ContainerRoot from './ContainerRoot'

type Props = React.PropsWithChildren<{
  behavior?: Behavior
  spacing?: Size | object | string
  component?: keyof JSX.IntrinsicElements
}>

const defaultBehavior = Behavior.Fluid
const defaultSpacing = Size.Large

const Container: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      behavior = defaultBehavior,
      spacing = defaultSpacing,
      component = 'div',
      children,
    }: Props,
    ref
  ) => (
    <ContainerRoot
      ref={ref}
      as={component}
      behavior={behavior}
      spacing={spacing}
    >
      {children}
    </ContainerRoot>
  )
)

export default Container
