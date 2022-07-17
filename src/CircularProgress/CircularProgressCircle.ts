import styled, { css } from 'styled-components'
import { State } from './types'
import circularDashKeyframe from './keyframe/circularDashKeyframe'

type Props = {
  state: State
}

export default styled.circle<Props>`
  stroke: currentColor;

  ${({ state, theme }) =>
    state === State.Determinate &&
    css`
      transition: transform ${theme.transition.duration.default}
        ${theme.transition.easing.sharp};
    `}

  ${({ state }) =>
    state === State.Indeterminate &&
    css`
      animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
    `}
`
