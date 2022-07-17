import styled from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

type Props = {
  spacing?: Size
}

export default styled.li<Props>`
  align-items: center;
  color: ${({ theme }) => theme.color.font.hex()};
  display: flex;
  width: 100%;
  ${({ theme, spacing }) =>
    spacing &&
    `
    padding: ${theme.spacing.size[spacing].rem()} 0;
  `}
`
