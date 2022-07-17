import styled from 'styled-components'
import { animated } from 'react-spring'
import { Size, query } from '@mycompany/design-system/Styleguide'
import { DrawerOrientation } from './types'

type Props = {
  closeable: boolean
  orientation: DrawerOrientation
}

export default styled(animated.div)<Props>`
  align-content: stretch;
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  cursor: ${({ closeable }) => (closeable ? 'pointer' : 'default')};
  display: flex;
  justify-content: stretch;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer};

  &:active,
  &:focus {
    outline: none;
  }

  ${query.min(Size.Small)`
    align-content: ${({ orientation }: Props) =>
      orientation === DrawerOrientation.Left ? 'flex-start' : 'flex-end'};
    align-items: stretch;
    justify-content: ${({ orientation }: Props) =>
      orientation === DrawerOrientation.Left ? 'flex-start' : 'flex-end'};
  `}
`
