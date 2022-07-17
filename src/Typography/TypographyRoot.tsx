import styled, { css } from 'styled-components'
import {
  mixin as globalMixin,
  TypographyUnit,
  Size,
  Status,
  Variant,
} from '@mycompany/design-system/Styleguide'
import { TypographyAlign } from '@mycompany/design-system/index'
import * as mixin from './mixin'

type Props = {
  display: TypographyUnit
  lighten?: number | false
  status: Status
  align?: TypographyAlign
  through?: boolean
  variant?: Variant
  spacing: Size | false
}

export default styled.span<Props>`
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ through }) =>
    through &&
    css`
      text-decoration: line-through;
    `}
  ${({ display, theme, lighten }) =>
    (display === TypographyUnit.Headline1 ||
      display === TypographyUnit.Headline2 ||
      display === TypographyUnit.Headline3 ||
      display === TypographyUnit.Headline4) &&
    css`
      color: ${lighten
        ? theme.color.variant.primary.base.lighten(lighten).hex()
        : theme.color.variant.primary.base.hex()};
    `}
  ${({ display, theme, lighten }) =>
    display === TypographyUnit.Action &&
    css`
      color: ${lighten
        ? theme.color.variant.primary.base.lighten(lighten).hex()
        : theme.color.variant.primary.base.hex()};
      display: inline-block;
    `}

  ${({ display, theme, lighten }) =>
    display === TypographyUnit.Caption &&
    css`
      color: ${lighten
        ? theme.color.font.lighten(lighten).hex()
        : theme.color.font.lighten(1).hex()};
    `}

  /* Global Mixins */
  ${({ display }) => globalMixin.typography[display]}
  ${({ spacing, theme }) => globalMixin.margin({ spacing, theme })}

  /* States */
  ${mixin.status}
  ${({ variant }) =>
    variant &&
    css`
      ${mixin.variant}
    `}
`
