import { css, StyledProps } from 'styled-components'

export default ({ iconOnly }: StyledProps<{ iconOnly: boolean }>) =>
  iconOnly &&
  css`
    &:hover {
      background: none;
    }
  `
