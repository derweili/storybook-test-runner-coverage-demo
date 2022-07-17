import styled from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

type Props = {
  size: Size
  isLoading: boolean
}

export default styled.span<Props>`
  display: flex;
  font-size: inherit;
  opacity: ${({ isLoading }) => (isLoading ? '0.5' : '1')};
  ${({ size }) =>
    (size === Size.Small || size === Size.Tiny) &&
    `width: 20px;
    svg {
      width: 100%;
    }
    `}
  &:only-child {
    padding: 0;
  }
`
