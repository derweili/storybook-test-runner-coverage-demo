import React from 'react'
import {
  Size,
  FlexboxDirection,
  FlexboxWrap,
  FlexboxJustification,
  FlexboxAlignContent,
  FlexboxAlignItems,
} from '@mycompany/design-system/Styleguide'
import { GridSize } from './types'
import GridRoot from './GridRoot'

type Props = React.PropsWithChildren<{
  item?: boolean
  container?: boolean
  gridGap?: Size | false
  zero?: GridSize | false
  tiny?: GridSize | false
  small?: GridSize | false
  medium?: GridSize | false
  large?: GridSize | false
  xLarge?: GridSize | false
  alignContent?: FlexboxAlignContent | false
  alignItems?: FlexboxAlignItems | false
  justify?: FlexboxJustification | false | object
  direction?: FlexboxDirection | false
  wrap?: FlexboxWrap | false
  spacing?: Size
  component?: keyof JSX.IntrinsicElements
}>

const defaultSpacing = Size.Medium
const defaultGap = Size.Zero

const Grid = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      alignContent = false,
      alignItems = false,
      justify = false,
      direction = false,
      wrap = false,
      item = false,
      container = false,
      gridGap = defaultGap,
      spacing = defaultSpacing,
      component = 'div',
      children,
      ...sizeProps
    }: Props,
    ref
  ) => (
    <GridRoot
      as={component}
      ref={ref}
      alignContent={alignContent}
      alignItems={alignItems}
      justify={justify}
      flexDirection={direction}
      flexWrap={wrap}
      item={item}
      container={container}
      gridGap={gridGap}
      spacing={spacing}
      {...sizeProps}
    >
      {children}
    </GridRoot>
  )
)

export default Grid
