import styled, { css, DefaultTheme } from 'styled-components'
import { mixin as globalMixin, Size } from '@mycompany/design-system/Styleguide'
import { Opacity, Variant } from '@mycompany/design-system/index'

type Props = {
  background?: Variant
  spacing: Size
  opacity?: Opacity
  border?: boolean | false
  margin: string | object
  theme: DefaultTheme
}

const margin = ({ theme, ...props }: Props) => {
  let marginStyle = ''
  if (typeof props.margin === 'object') {
    Object.entries(props.margin).forEach(([key, value]) => {
      const checkKey = Object.keys(Size).filter(
        (items) =>
          items.toLowerCase() === (key === 'xLarge' ? 'extralarge' : key)
      )
      if (checkKey.length === 0) {
        marginStyle += `
            margin-${key}: ${
          /\d/.test(value) ? value : theme.spacing.size[value].rem()
        };
        `
      }

      if (checkKey.length === 1) {
        marginStyle += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                  margin: ${value}
                }
        `
      }
    })
    return css`
      ${marginStyle}
    `
  }

  if (typeof props.margin === 'string') {
    return css`
      margin: ${theme.spacing.size[props.margin].px() || '0'};
    `
  }

  return false
}

export default styled.div<Props>`
  ${({ opacity }) =>
    opacity &&
    `
    opacity: ${opacity};
  `}
  ${({ background, theme }) =>
    background &&
    background === Variant.Secondary &&
    `
    background: ${theme.color.appBackground.hex()};
  `}
  ${({ border, theme }) =>
    border &&
    css`
      border: 1px solid ${theme.color.variant.secondary.base.hex()};
    `}
  ${({ spacing, theme }) => globalMixin.spacing({ spacing, theme })}
  ${css`
    ${margin}
  `}
`
