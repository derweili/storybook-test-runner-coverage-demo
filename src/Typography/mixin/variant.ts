import { css, StyledProps } from 'styled-components'
import { Variant } from '@mycompany/design-system/Styleguide'

export default ({
  theme,
  variant,
}: StyledProps<{
  variant: Variant
}>) => css`
  color: ${variant === Variant.Primary
    ? theme.color.variant[variant].base.hex()
    : theme.color.variant[variant].font.hex()};
`
