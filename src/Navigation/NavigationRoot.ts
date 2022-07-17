import styled from 'styled-components'
import { Size } from '@mycompany/design-system/Styleguide'
import NavigationItemRoot from './NavigationItemRoot'

type Props = {
  gridSpacing: Size | false
  gridSize: Size | false
  orientation?: 'horizontal' | 'vertical'
}

export default styled.ul<Props>`
  display: flex;

  flex-direction: ${(props) =>
    props.orientation === 'vertical' ? 'column' : 'row'};
  & ${NavigationItemRoot} {
    flex-basis: auto;
    padding: ${({ gridSpacing, theme }) =>
        gridSpacing ? theme.spacing.size[gridSpacing].rem() : 0}
      0;
    ${({ orientation, gridSize, theme }) =>
      orientation === 'horizontal' &&
      `
        width: fit-content;
        margin: 0 ${gridSize ? theme.spacing.size[gridSize].rem() : 0};
    `}

    ${({ orientation, theme, gridSpacing }) =>
      orientation === 'vertical' &&
      `
      padding-right: ${gridSpacing && theme.spacing.size[Size.Medium].rem()};
      justify-content: space-between;
      &:first-child {
        border-top: 1px solid ${theme.color.divider.hex()};
      }
      border-bottom: 1px solid ${theme.color.divider.hex()};
    `}
  }
  margin: ${({ gridSize, theme }) =>
      gridSize ? theme.spacing.size[gridSize].rem() : 0}
    0;
  padding: 0;
`
