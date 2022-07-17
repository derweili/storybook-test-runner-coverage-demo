import styled, { css } from 'styled-components'
import {
  Size,
  FlexboxDirection,
  FlexboxWrap,
  FlexboxJustification,
  FlexboxAlignContent,
  FlexboxAlignItems,
} from '@mycompany/design-system/Styleguide'

import {
  flexWrap,
  justify,
  alignItems,
  alignContent,
  height,
  gridGap,
} from './mixin/options'

import { GridSize } from './types'

type GridSizeProps = {
  [key in Size]?: GridSize | false
}

type Props = GridSizeProps & {
  container: boolean
  gridGap?: Size | false
  item: boolean
  alignContent: FlexboxAlignContent | false
  alignItems: FlexboxAlignItems | false | object
  justify: FlexboxJustification | false | object
  flexDirection: FlexboxDirection | false
  flexWrap: FlexboxWrap | false
  spacing?: Size | false
}

const getFlexWidth = (size: GridSize): string => {
  if (size === 'auto') {
    return size
  }
  return `${Math.floor((100 / 12) * size * 1000000) / 1000000}%`
}

const setFlexWidth = (size: GridSize, param: string) =>
  size === 'auto' ? param : getFlexWidth(size as GridSize)

const setQueryGrid = (theme: any, props: Props) => {
  let setQueryGridStyles = ''
  if (props.item) {
    Object.keys(Size).forEach((item) => {
      if (props[Size[item]]) {
        setQueryGridStyles += `
        @media (min-width: ${theme.breakpoint[Size[item]].px()}) {
          flex-basis: ${setFlexWidth(props[Size[item]], 'auto')};
          flex-grow: ${props[Size[item]] === 'auto' ? 1 : 0};
          max-width: ${setFlexWidth(props[Size[item]], 'none')};
          }
        `
      }
    })
  }
  return css`
    ${setQueryGridStyles}
  `
}

export default styled.div<Props>`
  ${({ container, spacing, theme, flexDirection }) =>
    container &&
    css`
      box-sizing: border-box;
      display: flex;
      flex-direction: ${flexDirection || 'row'};
      ${justify}
      flex-wrap: wrap;
      margin: 0
        ${spacing ? theme.spacing.size[spacing].multiply(-1).rem() : '0'};
      padding: ${spacing ? theme.spacing.size[spacing].rem() : '0'};
      width: ${spacing
        ? `calc(100% + ${theme.spacing.size[spacing].multiply(2).rem()})`
        : '100%'};
    `}

  ${css`
    ${flexWrap}
    ${justify}
    ${alignItems}
    ${alignContent}
    ${height}
    ${gridGap}
  `}
  ${({ item, flexDirection }) =>
    item &&
    css`
      flex-direction: ${flexDirection || 'row'};
    `}
  ${({ item, spacing, theme }) =>
    item &&
    css`
      box-sizing: border-box;
      padding: ${spacing ? theme.spacing.size[spacing].rem() : '0'};
    `}

  ${({ theme, item, ...props }) =>
    css`
      ${setQueryGrid(theme, { item, ...props })}
    `}
`
