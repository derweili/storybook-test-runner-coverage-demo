import { css, StyledProps } from 'styled-components'
import { ElevationLevel } from '@mycompany/design-system/Styleguide'

export default ({
  theme,
  elevation,
}: StyledProps<{ elevation: ElevationLevel }>) =>
  elevation !== ElevationLevel.None &&
  css`
    box-shadow: ${theme.elevation[elevation]};

    &:active {
      box-shadow: ${theme.elevation[elevation]};
    }
  `
