import { css } from 'styled-components'
import {
  Size,
  theme,
  FlexboxDirection,
  FlexboxAlignContent,
  FlexboxAlignItems,
  FlexboxWrap,
  FlexboxJustification,
} from '@mycompany/design-system/Styleguide'
import { GridSize } from '../types'

type GridSizeProps = {
  [key in Size]?: GridSize | false
}

type Props = GridSizeProps & {
  displayFlex: string | false
  fullHeight?: boolean
  flex: string | false
  container: boolean
  gridGap?: Size | false
  item: boolean
  columnItem?: string | false
  alignContent: FlexboxAlignContent | false
  alignItems: FlexboxAlignItems | false
  justify: FlexboxJustification | false | object
  flexDirection: FlexboxDirection | false
  flexWrap: FlexboxWrap | false
  spacing?: Size | false
}

const displayFlex = ({ ...props }: Props) =>
  props.displayFlex &&
  css`
    display: ${props.displayFlex || 'unset'};
  `

const flexWrap = ({ ...props }: Props) =>
  props.flexWrap &&
  css`
    flex-wrap: ${props.flexWrap || 'wrap'};
  `

const height = ({ ...props }: Props) =>
  props.fullHeight &&
  css`
    height: ${props.fullHeight ? '100%' : 'auto'};
  `

const gridGap = ({ ...props }: Props) =>
  props.gridGap &&
  css`
    grid-gap: ${props.gridGap ? theme.spacing.size[props.gridGap].rem() : '0'};
  `

const alignContent = ({ ...props }: Props) => {
  let alignContentStyle = ''
  if (typeof props.alignContent === 'object') {
    Object.entries(props.alignContent).forEach(([key, value]) => {
      alignContentStyle += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                    align-content: ${value || 'flex-start'};
                }
            `
    })
    return css`
      ${alignContentStyle}
    `
  }
  if (typeof props.alignContent === 'string') {
    return css`
      align-content: ${props.alignContent || 'flex-start'};
    `
  }
  return false
}

const alignItems = ({ ...props }: Props) => {
  let alignItemsStyle = ''
  if (typeof props.alignItems === 'object') {
    Object.entries(props.alignItems).forEach(([key, value]) => {
      alignItemsStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
                align-items: ${value || 'flex-start'};
            }
        `
    })
    return css`
      ${alignItemsStyle}
    `
  }
  if (typeof props.alignItems === 'string') {
    return css`
      align-items: ${props.alignItems || 'flex-start'};
    `
  }
  return false
}

const justify = ({ ...props }: Props) => {
  let justifyStyles = ''
  if (typeof props.justify === 'object') {
    Object.entries(props.justify).forEach(([key, value]) => {
      justifyStyles += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                    justify-content: ${value || 'flex-start'};
                }

            `
    })
    return css`
      ${justifyStyles}
    `
  }
  if (typeof props.justify === 'string') {
    return css`
      justify-content: ${props.justify || 'flex-start'};
    `
  }
  return false
}

export {
  displayFlex,
  flexWrap,
  justify,
  alignItems,
  alignContent,
  height,
  gridGap,
}
