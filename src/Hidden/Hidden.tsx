import styled, { css } from 'styled-components'
import { Size } from '../Styleguide'

type HiddenProps = {
  up?: Size | false
  down?: Size | false
}

const Hidden = styled.div<HiddenProps>`
  ${({ up, theme }) =>
    up &&
    css`
      @media (min-width: ${theme.breakpoint[up].px()}) {
        display: none;
      }
    `}

  ${({ down, theme }) =>
    down &&
    css`
      @media (max-width: ${theme.breakpoint[down].px()}) {
        display: none;
      }
    `}
`

export default Hidden