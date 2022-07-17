import styled, { css } from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

import {
  justify,
  alignItems,
  alignContent,
  alignSelf,
  gridGap,
  gridColumns,
  gridItems,
  gridTemplate,
  gridRow,
  gridArea,
  gridAutoFlow,
  spacing,
} from './mixin/options'

import {
  GridAlignContent,
  GridAlignItems,
  GridJustify,
  GridArea,
  GridColumn,
  GridDirection,
  GridAutoFlow,
} from './types'

type Props = {
  alignContent?: GridAlignContent | false
  alignItems?: GridAlignItems | false | object
  alignSelf?: GridAlignContent | false | object
  justify?: GridJustify | false | object
  direction?: GridDirection
  container?: boolean
  item?: boolean
  spacing?: Size | false
  gridGap?: Size | object
  gridAutoFlow?: GridAutoFlow | object
  gridRow?: string | object
  gridArea?: GridArea | object
  gridTemplate?: GridArea | object
  gridColumns?: number | object | GridColumn | string | false
  gridItems?: string | false | object
  gridAutoFill?: number
}

const CssGridRoot = styled.div<Props>`
  ${({ container, gridAutoFill }) =>
    container &&
    css`
      margin: 0;
      box-sizing: border-box;
      display: grid;
      grid-auto-flow: column;
      ${gridAutoFill &&
      `
        grid-template-columns: repeat(auto-fit, minmax(${gridAutoFill}px, 1fr));
      `}
    `}

  ${css`
    ${spacing}
    ${justify}
    ${alignItems}
    ${alignContent}
    ${alignSelf}
    ${gridGap}
    ${gridColumns}
    ${gridItems}
    ${gridTemplate}
    ${gridRow}
    ${gridArea}
    ${gridAutoFlow}
  `}
`

export { CssGridRoot }
