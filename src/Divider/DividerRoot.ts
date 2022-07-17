import styled, { css } from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'
import { Orientation, Display } from './types'

type Props = {
  orientation: Orientation
  display: Display
  flexItem: boolean
  spacing: Size
  inverted: boolean
}

export default styled.hr<Props>`
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.color.dividerInverted.hex() : theme.color.divider.hex()};
  border: 0;
  box-sizing: border-box;
  flex-shrink: 0;

  margin-bottom: ${({ spacing, theme }) => theme.spacing.size[spacing].rem()};
  margin-left: ${({ spacing, theme, display }) =>
    display === Display.Middle ? theme.spacing.size[spacing].rem() : '0'};
  margin-right: ${({ spacing, theme, display }) =>
    display === Display.Middle ? theme.spacing.size[spacing].rem() : '0'};
  margin-top: ${({ spacing, theme }) => theme.spacing.size[spacing].rem()};

  ${({ flexItem }) =>
    flexItem &&
    css`
      align-self: stretch;
    `}

  ${({ orientation }) =>
    orientation === Orientation.Horizontal &&
    css`
      height: 1px;
      width: auto;
    `}

  ${({ orientation }) =>
    orientation === Orientation.Vertical &&
    css`
      height: auto;
      width: 1px;
    `};
`
