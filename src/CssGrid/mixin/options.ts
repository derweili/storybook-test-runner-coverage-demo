import { css, DefaultTheme } from 'styled-components'
import { Size, theme } from '@mycompany/design-system/Styleguide'
import {
  GridAlignContent,
  GridAlignItems,
  GridJustify,
  GridArea,
  GridAutoFlow,
} from '../types'

type Props = {
  container: boolean
  gridGap?: Size | object
  item: boolean
  gridTemplate?: GridArea
  gridArea?: GridArea
  gridColumns?: number | false
  gridRow?: string | object
  alignContent: GridAlignContent | false
  alignSelf: GridAlignContent | false
  alignItems: GridAlignItems | false | object
  justify: GridJustify | false | object
  gridAutoFlow?: GridAutoFlow
  gridAutoFill?: number
  gridItems?: string | false
  spacing?: Size | string | object
  grid?: boolean
  theme: DefaultTheme
}

const gridGap = ({ ...props }: Props) => {
  let gridGapStyle = ''
  if (typeof props.gridGap === 'object') {
    Object.entries(props.gridGap).forEach(([key, value]) => {
      const checkKey = Object.keys(Size).filter(
        (items) =>
          items.toLowerCase() === (value === 'xLarge' ? 'extralarge' : value)
      )
      gridGapStyle += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                  grid-gap: ${
                    checkKey.length === 0
                      ? value
                      : theme.spacing.size[value].rem()
                  };
                }
            `
    })
    return css`
      ${gridGapStyle}
    `
  }

  if (typeof props.gridGap === 'string') {
    const checkKey = Object.keys(Size).filter(
      (items) => items.toLowerCase() === props.gridGap
    )
    return css`
      grid-gap: ${checkKey.length === 0
        ? props.gridGap
        : theme.spacing.size[props.gridGap].rem()};
    `
  }
  return false
}

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

const gridAutoFlow = ({ ...props }: Props) => {
  let gridAutoFlowStyle = ''
  if (typeof props.gridAutoFlow === 'object') {
    Object.entries(props.gridAutoFlow).forEach(([key, value]) => {
      gridAutoFlowStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
              grid-auto-flow: ${value};
            }
        `
    })
    return css`
      ${gridAutoFlowStyle}
    `
  }
  if (typeof props.gridAutoFlow === 'string') {
    return css`
      grid-auto-flow: ${props.gridAutoFlow};
    `
  }
  return false
}

const gridTemplate = ({ ...props }: Props) => {
  let gridTemplateStyle = ''
  if (typeof props.gridTemplate === 'object') {
    Object.entries(props.gridTemplate).forEach(([key, value]) => {
      gridTemplateStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
              grid-template-areas: "${value}";
            }
        `
    })
    return css`
      grid-auto-flow: dense;
      grid-template-areas: unset;
      ${gridTemplateStyle}
    `
  }
  if (typeof props.gridTemplate === 'string') {
    return css`
      grid-auto-flow: dense;
      grid-template-areas: unset;
      grid-template-areas: '${props.gridTemplate}';
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

const alignSelf = ({ ...props }: Props) => {
  let alignSelfStyle = ''
  if (typeof props.alignSelf === 'object') {
    Object.entries(props.alignSelf).forEach(([key, value]) => {
      alignSelfStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
                align-self: ${value || 'flex-start'};
            }
        `
    })
    return css`
      ${alignSelfStyle}
    `
  }
  if (typeof props.alignSelf === 'string') {
    return css`
      align-self: ${props.alignSelf || 'flex-start'};
    `
  }
  return false
}

const gridArea = ({ ...props }: Props) => {
  let gridAreaStyle = ''
  if (typeof props.gridArea === 'object') {
    Object.entries(props.gridArea).forEach(([key, value]) => {
      gridAreaStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
                grid-area: ${value};
            }
        `
    })
    return css`
      ${gridAreaStyle}
    `
  }
  if (typeof props.gridArea === 'string') {
    return css`
      grid-area: ${props.gridArea};
    `
  }
  return false
}
const gridRow = ({ ...props }: Props) => {
  let gridRowStyle = ''
  if (typeof props.gridRow === 'object') {
    Object.entries(props.gridRow).forEach(([key, value]) => {
      gridRowStyle += `
            @media (min-width: ${theme.breakpoint[key].px()}) {
                grid-row: ${value};
            }
        `
    })
    return css`
      ${gridRowStyle}
    `
  }
  if (typeof props.gridRow === 'string') {
    return css`
      grid-row: ${props.gridRow};
    `
  }
  return false
}
const gridColumns = ({ ...props }: Props) => {
  let gridColumnsStyles = ''

  if (typeof props.gridColumns === 'object') {
    Object.entries(props.gridColumns).forEach(([key, value]) => {
      const checkString =
        typeof value === 'string' ? `${value}` : `repeat(${value}, 1fr)`
      gridColumnsStyles += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                    grid-template-columns: ${checkString}
                }

            `
    })
    return css`
      ${gridColumnsStyles}
    `
  }
  if (typeof props.gridColumns === 'number') {
    return css`
      grid-template-columns: repeat(${props.gridColumns}, 1fr);
    `
  }
  if (typeof props.gridColumns === 'string') {
    return css`
      grid-template-columns: ${props.gridColumns};
    `
  }
  return false
}

const gridItems = ({ ...props }: Props) => {
  let gridItemsStyles = ''
  if (typeof props.gridItems === 'object') {
    Object.entries(props.gridItems).forEach(([key, value]) => {
      gridItemsStyles += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                  grid-column: ${value};
                }

            `
    })
    return css`
      ${gridItemsStyles}
    `
  }
  if (typeof props.gridItems === 'string') {
    return css`
      grid-column: ${props.gridItems};
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

const spacing = ({ theme, ...props }: Props) => {
  let spacingStyle = ''
  if (typeof props.spacing === 'object') {
    Object.entries(props.spacing).forEach(([key, value]) => {
      const checkKey = Object.keys(Size).filter(
        (items) =>
          items.toLowerCase() === (key === 'xLarge' ? 'extralarge' : key)
      )
      if (checkKey.length === 0) {
        spacingStyle += `
            padding-${key}: ${
          /\d/.test(value) ? value : theme.spacing.size[value].rem()
        };
        `
      }

      if (checkKey.length === 1) {
        spacingStyle += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                  padding: ${value}
                }
        `
      }
    })
    return css`
      ${spacingStyle}
    `
  }

  if (typeof props.spacing === 'string') {
    return css`
      padding: ${theme.spacing.size[props.spacing].px() || '0'};
    `
  }

  return false
}

export {
  spacing,
  justify,
  alignItems,
  alignContent,
  gridGap,
  gridColumns,
  gridItems,
  gridTemplate,
  gridArea,
  gridRow,
  alignSelf,
  gridAutoFlow,
}
