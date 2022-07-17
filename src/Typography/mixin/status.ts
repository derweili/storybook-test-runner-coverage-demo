import { css, StyledProps } from 'styled-components'
import { Status } from '@mycompany/design-system/Styleguide'

export default ({ status, theme }: StyledProps<{ status: Status }>) =>
  status &&
  status !== Status.Default &&
  css`
    color: ${theme.color.status[status].base.hex()};
  `
