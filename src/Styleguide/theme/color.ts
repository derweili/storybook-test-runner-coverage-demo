import { Variant, Status } from '../types'
import palette from './palette'
import { Color } from './types'

const color: Color = {
  font: palette.nero,
  fontLight: palette.nero.lighten(1),
  appBackground: palette.alabaster,
  contentBackground: palette.white,
  divider: palette.maverick,
  dividerInverted: palette.white,
  variant: {
    [Variant.Primary]: {
      base: palette.patone,
      font: palette.white,
      hover: palette.patone.darken(0.1),
      active: palette.patone.darken(0.2),
    },
    [Variant.Secondary]: {
      base: palette.alabaster,
      font: palette.nero,
      hover: palette.alabaster.darken(0.1),
      active: palette.alabaster.darken(0.2),
    },
    [Variant.Tertiary]: {
      base: palette.nero,
      font: palette.nero.lighten(1),
      hover: palette.nero.lighten(1.2),
      active: palette.nero.darken(1.2),
    }
  },
  status: {
    [Status.SoldOut]: {
      base: palette.soda,
      font: palette.soda,
      hover: palette.soda.lighten(0.1),
      active: palette.soda.lighten(0.2),
    },
    [Status.Discount]: {
      base: palette.pyroman,
      font: palette.pyroman,
      hover: palette.pyroman.lighten(0.1),
      active: palette.pyroman.lighten(0.2),
    },
    [Status.Lighten]: {
      base: palette.lighten,
      font: palette.lighten,
      hover: palette.pyroman.darken(0.1),
      active: palette.pyroman.darken(0.2),
    },
    [Status.Success]: {
      base: palette.kelly,
      font: palette.nero,
      hover: palette.kelly.darken(0.1),
      active: palette.kelly.darken(0.2),
    },
    [Status.Warning]: {
      base: palette.honey,
      font: palette.nero,
      hover: palette.honey.darken(0.1),
      active: palette.honey.darken(0.2),
    },
    [Status.Error]: {
      base: palette.soda,
      font: palette.nero,
      hover: palette.soda.darken(0.1),
      active: palette.soda.darken(0.2),
    },
  },
  breadcrumbs: {
    anchor: palette.dim,
    divider: palette.hillary,
  },
  form: {
    borderColor: palette.maverick,
    backgroundColor: palette.white,
    backgroundColorDisabled: palette.white.darken(0.02),
    font: palette.nero,
    placeholderFont: palette.maverick,
  },
  list: palette.dim,
  rating: {
    empty: palette.dim.lighten(1.1),
    filled: palette.patone,
  },
}

export default color
