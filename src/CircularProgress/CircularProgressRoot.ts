import styled, { css } from 'styled-components'
import {
  Variant,
  Status,
  Size,
  ColorValue,
  mixin,
} from '@mycompany/design-system/Styleguide'
import { State } from './types'
import circularRotateKeyframe from './keyframe/circularRotateKeyframe'

type Props = {
  state: State
  variant: Variant
  inherit: boolean
  spacing: Size | false
  status: Status
  overrideColor?: ColorValue
}

export default styled.span<Props>`
  color: ${({ theme, variant, inherit }) =>
    inherit
      ? theme.color.variant[variant].font.hex()
      : theme.color.variant[variant].base.hex()};
  display: inline-flex;

  ${({ status, theme, inherit }) =>
    status &&
    status !== Status.Default &&
    css`
      color: ${
        inherit
          ? theme.color.status[status].font.hex()
          : theme.color.status[status].base.hex()
      };};
    `}

  ${({ state, theme }) =>
    state === State.Determinate &&
    css`
      transition: transform ${theme.transition.duration.default}
        ${theme.transition.easing.sharp};
    `}

  ${({ state }) =>
    state === State.Indeterminate &&
    css`
      animation: ${circularRotateKeyframe} 1.4s linear infinite;
    `}


  ${({ theme, spacing }) => mixin.spacing({ spacing, theme })}
`
