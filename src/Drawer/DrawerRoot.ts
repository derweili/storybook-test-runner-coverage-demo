import styled from 'styled-components'
import { animated } from 'react-spring'
import { ElevationLevel, Size } from '@mycompany/design-system/Styleguide'

type Props = {
  spacing?: Size
  elevation: ElevationLevel
}

export default styled(animated.div)<Props>`
  background-color: ${({ theme }) => theme.color.contentBackground.hex()};
  box-shadow: ${({ theme, elevation }) => theme.elevation[elevation]};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 320px;
  width: 90vw;
  ${({ spacing, theme }) =>
    spacing &&
    `
  padding: ${theme.spacing.size[spacing].rem()};
  `}
`
