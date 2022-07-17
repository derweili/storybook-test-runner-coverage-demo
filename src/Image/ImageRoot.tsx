import styled, { css } from 'styled-components'
import { ObjectFit, Size } from '@mycompany/design-system/Styleguide'

type Props = {
  spacing: Size
  src: string
  objectFit?: ObjectFit
}
export default styled.img<Props>`
  margin: 0;
  width: 100%;

  ${({ objectFit }) =>
    objectFit &&
    css`
      object-fit: ${objectFit};
    `}
`
