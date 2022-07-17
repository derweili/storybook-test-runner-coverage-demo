import styled from 'styled-components'
import { mixin } from '@mycompany/design-system/Styleguide'

type Props = {}

export default styled.div<Props>`
  ${mixin.typography.headline3}
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  padding-right: ${({ theme }) => theme.spacing.size.medium.rem()};
`
