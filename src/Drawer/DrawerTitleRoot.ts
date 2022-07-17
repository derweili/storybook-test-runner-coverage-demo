import styled from 'styled-components'
import {} from '@mycompany/design-system/Styleguide'

type Props = {}

export default styled.div<Props>`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing.size.medium.rem()};
`
