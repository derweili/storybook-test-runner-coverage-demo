import styled from 'styled-components'
import {
  mixin as globalMixin,
  Size,
  Variant,
  ElevationLevel,
  Status,
} from '@mycompany/design-system/Styleguide'
import * as mixin from './mixin'

import { AttachmentPos } from './types'

type Props = {
  size: Size
  variant: Variant
  status: Status
  disabled: boolean
  elevation: ElevationLevel
  fullWidth: boolean
  pill: boolean
  link: boolean
  noBackground: boolean
  attachmentPos: AttachmentPos
  elementSpacing: Size | false
  isLoading: boolean
  hasLabel: boolean
  iconOnly: boolean
}

export default styled.button<Props>`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border: 0;

  border-radius: ${({ theme }) => theme.shape.borderRadius.rem()};
  cursor: ${({ isLoading, disabled }) =>
    (disabled && 'not-allowed') || (isLoading && 'wait') || 'pointer'};

  display: inline-flex;
  flex-direction: ${({ attachmentPos }) => attachmentPos};
  justify-content: center;
  line-height: 1;
  min-width: ${({ hasLabel }) => (hasLabel ? '64px' : 'none')};
  outline: 0;
  position: relative;
  text-decoration: none;

  /* Global Mixins */
  ${globalMixin.typography.action}

  /* States */
  ${mixin.variant}
  ${mixin.status}
  ${mixin.size}
  ${mixin.pill}
  ${mixin.link}
  ${mixin.noBackground}
  ${mixin.fullWidth}
  ${mixin.disabled}
  ${mixin.elevation}
  ${mixin.iconOnly}
  transition: background ${({ theme }) => theme.transition.duration.shortest}ms
      ${({ theme }) => theme.transition.easing.easeIn},
    box-shadow ${({ theme }) => theme.transition.duration.shortest}ms
      ${({ theme }) => theme.transition.easing.easeIn};
  vertical-align: middle;
  ${({ theme, elementSpacing }) =>
    elementSpacing &&
    `
    grid-gap: ${theme.spacing.size[elementSpacing].rem()};
    padding: ${theme.spacing.size[elementSpacing].rem()};
  `}
`
