import { css, StyledProps } from 'styled-components'

export default ({
  link,
  theme,
}: StyledProps<{
  link: boolean
}>) =>
  link &&
  css`
    background: transparent;
    color: ${theme.color.variant.primary.base.hex()};
    padding-left: 0;
    padding-right: 0;
    &:hover {
      background: transparent;
      color: ${theme.color.variant.primary.hover.hex()};
    }
    &:active {
      background: transparent;
      color: ${theme.color.variant.primary.active.hex()};
    }
  `
