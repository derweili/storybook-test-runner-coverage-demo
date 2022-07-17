import { css, StyledProps } from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'

export default ({
  fullWidth,
}: StyledProps<{ fullWidth: boolean; elementSpacing: Size | false }>) =>
  fullWidth &&
  css`
    display: flex;
    width: 100%;
  `
