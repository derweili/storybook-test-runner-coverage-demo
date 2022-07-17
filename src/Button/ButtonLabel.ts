import styled from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

type Props = {
  size: Size
  isLoading: boolean
}

export default styled.span<Props>`
  display: flex;
  flex-grow: 1;
  font-size: inherit;
  justify-content: center;
  opacity: ${({ isLoading }) => (isLoading ? '0.3' : '1')};
  text-align: center;
  white-space: nowrap;
`
