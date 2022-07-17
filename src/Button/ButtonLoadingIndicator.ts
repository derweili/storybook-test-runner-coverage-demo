import styled from 'styled-components'
import { CircularProgress } from '@mycompany/design-system/CircularProgress'
import { Size } from '@mycompany/design-system/Styleguide'

export default styled(CircularProgress)<{ size: Size }>`
  margin-top: ${({ size, theme }) =>
    theme.spacing.size[size].multiply(-1).px()};
  position: absolute;
  top: 50%;
`
