import styled from 'styled-components'
import { Size } from '../Styleguide'
type Props = {
  spacing?: Size
  first?: boolean
}
export const NavigationHeaderLink = styled.a<Props>`
  border-bottom: 2px solid transparent;
  color: inherit;

  ${({theme, spacing}) => spacing && `
    padding: 0 ${theme.spacing.size[spacing].rem()};
  `}
  ${({first}) => first && `
    padding-left: 0;
  `}
  &:hover {
    border-bottom-color: ${({ theme }) =>
      theme.color.variant.primary.base.hex()};
  }
`
