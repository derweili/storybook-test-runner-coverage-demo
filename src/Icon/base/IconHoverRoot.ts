import styled from 'styled-components'
import { Size, Variant } from '@mycompany/design-system/Styleguide'

type Props = {
  spacing: Size | 0
  variant: Variant
}
export default styled.span<Props>`
  ${({ theme, variant }) => `
    display: inline-block;
    padding: 10px;
    color: ${
      variant === Variant.Primary
        ? theme.color.variant[variant].base.hex()
        : theme.color.variant[variant].font.hex()
    };
    &:hover {
      border-radius: 50%;
      color: ${theme.color.variant[variant].font.hex()};
      background: ${theme.color.variant.secondary.base.hex()};
    }
  `}
`
