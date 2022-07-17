import { css, StyledProps } from 'styled-components'

export default ({ pill }: StyledProps<{ pill: boolean }>) =>
  pill &&
  css`
    border-radius: 5rem;
  `
