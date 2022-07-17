import styled, { css, DefaultTheme } from 'styled-components'
import { query, Size } from '@mycompany/design-system/Styleguide'
import { Behavior } from './types'

type Props = {
  behavior: Behavior
  spacing: Size | object | string
  theme: DefaultTheme
}

const padding = ({ theme, ...props }: Props) => {
  let spacingStyle = ''
  if (typeof props.spacing === 'object') {
    Object.entries(props.spacing).forEach(([key, value]) => {
      spacingStyle += `
                @media (min-width: ${theme.breakpoint[key].px()}) {
                    padding: ${value}
                }
      `
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

export default styled.div<Props>`
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.breakpoint[Size.ExtraLarge].px()};
  ${padding}
  ${({ behavior }) =>
    behavior === Behavior.Fixed &&
    css`
      ${query.min(Size.Small)`
        max-width: ${({ theme }) => theme.breakpoint[Size.Small].px()};
      `}

      ${query.min(Size.Medium)`
        max-width: ${({ theme }) => theme.breakpoint[Size.Medium].px()};
      `}

      ${query.min(Size.Large)`
        max-width: ${({ theme }) => theme.breakpoint[Size.Large].px()};
      `}

      ${query.min(Size.ExtraLarge)`
        max-width: ${({ theme }) => theme.breakpoint[Size.ExtraLarge].px()};
      `}
    `}
`
