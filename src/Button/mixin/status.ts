import { css, StyledProps } from 'styled-components'
import { Status } from '@mycompany/design-system/Styleguide'

export default ({
  theme,
  status,
  isLoading,
  disabled,
}: StyledProps<{ status: Status; isLoading: boolean; disabled: boolean }>) =>
  status &&
  status !== Status.Default &&
  css`
    background: ${theme.color.status[status].base.hex()};
    color: ${theme.color.status[status].font.hex()};

    ${!isLoading &&
    !disabled &&
    `
      &:hover {
        background: ${theme.color.status[status].hover.hex()};
      }

      &:active {
        background: ${theme.color.status[status].active.hex()};
      }
    `}
  `
