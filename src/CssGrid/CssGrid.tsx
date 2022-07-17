import React from 'react'
import { Size } from '@mycompany/design-system/Styleguide'
import {
  GridAlignContent,
  GridAlignItems,
  GridJustify,
  GridDirection,
  GridArea,
  GridColumn,
  GridAutoFlow,
} from './types'

import { CssGridRoot } from './CssGridStyles'

type Props = React.PropsWithChildren<{
  alignContent?: GridAlignContent | false
  alignItems?: GridAlignItems | false
  alignSelf?: GridAlignContent | false | object
  justify?: GridJustify | false | object
  direction?: GridDirection
  spacing?: Size
  gridRow?: string | object
  gridArea?: GridArea | object
  gridGap?: Size | object
  gridAutoFlow?: GridAutoFlow | object
  gridColumns?: number | object | GridColumn | string
  gridTemplate?: GridArea | object
  gridItems?: string | false | object
  gridAutoFill?: number
  container?: boolean
  item?: boolean
  component?: keyof JSX.IntrinsicElements
}>

const defaultSpacing = Size.Zero
const defaultGap = Size.Medium

const CssGrid: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      alignContent = false,
      alignItems = false,
      alignSelf = false,
      justify = false,
      direction,
      gridGap = defaultGap,
      container = false,
      item = false,
      spacing = defaultSpacing,
      gridRow,
      gridAutoFlow,
      gridArea,
      gridTemplate,
      gridColumns,
      gridItems,
      gridAutoFill,
      children,
      component = 'div',
    }: Props,
    ref
  ) => (
    <CssGridRoot
      ref={ref}
      alignContent={alignContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      justify={justify}
      direction={direction}
      container={container}
      item={item}
      gridAutoFlow={gridAutoFlow}
      spacing={spacing}
      gridRow={gridRow}
      gridGap={gridGap}
      gridArea={gridArea}
      gridTemplate={gridTemplate}
      gridColumns={gridColumns}
      gridItems={gridItems}
      gridAutoFill={gridAutoFill}
      as={component}
    >
      {children}
    </CssGridRoot>
  )
)

export default CssGrid
