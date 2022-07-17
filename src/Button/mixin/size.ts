import { css, StyledProps } from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

export default ({ theme, size }: StyledProps<{ size: Size }>) => css`
  ${size === Size.Zero &&
  `
    font-size: ${theme.typography.size.small.rem()};
    padding: 0;
  `}
  ${(size === Size.Small || size === Size.Tiny) &&
  `
    font-size: ${theme.typography.size.small.rem()};
  `}

  ${size === Size.Medium &&
  `
    font-size: ${theme.typography.size.medium.rem()};
  `}

  ${(size === Size.Large || size === Size.ExtraLarge) &&
  `
    font-size: ${theme.typography.size.large.rem()};
  `}
`
