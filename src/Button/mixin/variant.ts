import { css, StyledProps } from 'styled-components'
import { Variant } from '@mycompany/design-system/Styleguide'

export default ({
  theme,
  variant,
  disabled,
  isLoading,
}: StyledProps<{
  variant: Variant
  isLoading: boolean
  disabled: boolean
}>) => css`
  background: ${theme.color.variant[variant].base.hex()};
  color: ${theme.color.variant[variant].font.hex()};

  ${!isLoading &&
  !disabled &&
  `
    &:hover {
      background: ${theme.color.variant[variant].hover.hex()};
    }

    &:active {
      background: ${theme.color.variant[variant].active.hex()};
    }
  `}
`
