import { css, StyledProps } from 'styled-components'

export default ({ disabled }: StyledProps<{ disabled: boolean }>) =>
  disabled &&
  css`
    opacity: 0.7;
  `
