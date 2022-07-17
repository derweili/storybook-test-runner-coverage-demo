import palette from './palette'
import { FontWeight } from '../types'
import { SizeValue } from '../value'
import { Typography } from './types'

const weight = {
  [FontWeight.Light]: 300,
  [FontWeight.Regular]: 400,
  [FontWeight.Bold]: 500,
}

const size = {
  small: new SizeValue(13),
  medium: new SizeValue(16),
  large: new SizeValue(20),
}

const typography: Typography = {
  size,
  weight,
  base: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(14),
    lineHeight: 1.4,
    letterSpacing: new SizeValue(0),
    fontWeight: weight[FontWeight.Regular],
  },
  mobile: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(14),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(0),
    fontWeight: weight[FontWeight.Regular],
  },
  action: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  input: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(18),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(0.85),
    fontWeight: weight[FontWeight.Regular],
  },

  body1: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  body2: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(13),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  headline1: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(36),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  headline2: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(28),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  headline3: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(20),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  headline4: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Bold],
  },
  headline5: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Bold],
  },
  caption: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(12),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  footNote: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(10),
    lineHeight: 1.2,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  label: {
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    lineHeight: 1.5,
    letterSpacing: new SizeValue(1),
    fontWeight: weight[FontWeight.Regular],
  },
  footerHeading: {
    color: palette.dim,
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(16),
    fontWeight: weight[FontWeight.Bold],
    letterSpacing: new SizeValue(0),
    lineHeight: 1,
  },
  footerPhrasing: {
    color: palette.dim,
    fontFamily:
      '"Rubik", -apple-system, "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: new SizeValue(14),
    fontWeight: weight[FontWeight.Regular],
    letterSpacing: new SizeValue(0),
    lineHeight: 1,
  },
}

export default typography
