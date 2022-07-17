import styled from 'styled-components'
import { Button } from '@mycompany/design-system/Button'

export default styled(Button)`
  color: ${({ theme }) => theme.color.variant.secondary.font.hex()};
  margin-bottom: 0;
  margin-top: 0;
  position: absolute;
  right: 15px;
`
