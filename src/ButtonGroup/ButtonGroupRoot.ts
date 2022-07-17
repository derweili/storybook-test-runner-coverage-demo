import styled, { css } from 'styled-components'
import { ButtonComponents } from '@mycompany/design-system/Button'
import { DividerComponents } from '@mycompany/design-system/Divider'
import { Size, FlexboxJustification } from '@mycompany/design-system/Styleguide'

type Props = {
  squashed: boolean
  justify: FlexboxJustification
  elementSpacing: Size | false
}

export default styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  justify-content: ${({ justify }) => justify};
  margin: ${({ theme, elementSpacing }) =>
    elementSpacing ? theme.spacing.size[elementSpacing].rem() : 0};

  & ${ButtonComponents.ButtonRoot}, & ${DividerComponents.DividerRoot} {
    margin-bottom: 0;
    margin-top: 0;
  }

  & ${ButtonComponents.ButtonRoot}:last-child {
    margin-right: 0;
  }

  & ${ButtonComponents.ButtonRoot}:first-child {
    margin-left: 0;
  }

  ${({ squashed }) =>
    squashed &&
    css`
      & ${ButtonComponents.ButtonRoot}:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-left: 0;
      }

      & ${ButtonComponents.ButtonRoot}:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: 0;
      }
    `};
`
