import { css, StyledProps } from 'styled-components'

export default ({
  noBackground,
  theme,
}: StyledProps<{
  noBackground: boolean
}>) =>
  noBackground &&
  css`
    background: transparent;
    &:hover {
      background: none;
      color: ${theme.color.variant.primary.hover.hex()};
    }
  `
