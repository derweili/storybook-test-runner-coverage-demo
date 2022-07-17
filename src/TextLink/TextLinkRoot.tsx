import styled, { css } from 'styled-components'
import { Size, Variant } from '@mycompany/design-system/Styleguide'

type Props = {
  spacing: Size | 0
  href: string
  variant: Variant
  fullWidth?: boolean
  attachment?: React.ReactNode
  underline?: boolean
}
export default styled.a<Props>`
  ${({ theme, variant, underline, attachment, spacing, fullWidth }) =>
    css`
      color: ${variant === Variant.Primary
        ? theme.color.variant[variant].base.hex()
        : theme.color.variant[variant].font.hex()};
      cursor: pointer;
      display: inline-block;
      padding: ${spacing ? theme.spacing.size[spacing].px() : 0};
      text-decoration: ${underline ? 'underline' : 'none'};
      &:hover {
        ${underline &&
        `
            color: ${theme.color.variant[variant].hover.hex()};
          `}
        ${!underline &&
        `
            text-decoration: underline;
          `}
      }
      ${fullWidth &&
      `
        width: 100%;
      `}
      ${attachment &&
      `
        align-items: center;
        display: inline-flex;
        grid-gap: 0 ${spacing ? theme.spacing.size[spacing].px() : 0};
      `}
    `}
`
