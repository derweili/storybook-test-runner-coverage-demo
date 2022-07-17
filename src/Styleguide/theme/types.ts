import { ColorValue, SizeValue } from '../value'
import {
  Duration,
  Easing,
  FontWeight,
  Size,
  ElevationLevel,
  Variant,
  Status,
} from '../types'

export interface Palette {
  [key: string]: ColorValue
}

export interface ColorStatefulSet {
  base: ColorValue
  font: ColorValue
  hover: ColorValue
  active: ColorValue
}

export interface Color {
  font: ColorValue
  fontLight: ColorValue
  appBackground: ColorValue
  contentBackground: ColorValue
  divider: ColorValue
  dividerInverted: ColorValue
  variant: {
    [Variant.Primary]: ColorStatefulSet
    [Variant.Secondary]: ColorStatefulSet
    [Variant.Tertiary]: ColorStatefulSet
  }
  status: {
    [Status.Lighten]: ColorStatefulSet
    [Status.SoldOut]: ColorStatefulSet
    [Status.Discount]: ColorStatefulSet
    [Status.Success]: ColorStatefulSet
    [Status.Error]: ColorStatefulSet
    [Status.Warning]: ColorStatefulSet
  }
  breadcrumbs: {
    anchor: ColorValue
    divider: ColorValue
  }
  form: {
    borderColor: ColorValue
    backgroundColor: ColorValue
    backgroundColorDisabled: ColorValue
    font: ColorValue
    placeholderFont: ColorValue
  }
  list: ColorValue
  rating: {
    empty: ColorValue
    filled: ColorValue
  }
}

export interface TypographyProperties {
  fontFamily: string
  fontSize: SizeValue
  fontWeight: number | 'inherit'
  letterSpacing: SizeValue
  lineHeight: number
  color?: ColorValue
}

export enum TypographyUnit {
  Base = 'base',
  Mobile = 'mobile',
  Body1 = 'body1',
  Body2 = 'body2',
  Headline1 = 'headline1',
  Headline2 = 'headline2',
  Headline3 = 'headline3',
  Headline4 = 'headline4',
  Headline5 = 'headline5',
  Action = 'action',
  Input = 'input',
  Caption = 'caption',
  FootNote = 'footNote',
  Label = 'label',
  FooterHeading = 'footerHeading',
  FooterPhrasing = 'footerPhrasing',
}

export type TypographySet = {
  [key in TypographyUnit]: TypographyProperties
}

export interface Typography extends TypographySet {
  size: {
    [Size.Small]: SizeValue
    [Size.Medium]: SizeValue
    [Size.Large]: SizeValue
  }
  weight: {
    [FontWeight.Light]: number
    [FontWeight.Regular]: number
    [FontWeight.Bold]: number
  }
}

export interface Spacing {
  base: SizeValue
  size: {
    [Size.Zero]: SizeValue
    [Size.Tiny]: SizeValue
    [Size.Small]: SizeValue
    [Size.Medium]: SizeValue
    [Size.Large]: SizeValue
    [Size.ExtraLarge]: SizeValue
  }
}

export interface Shape {
  borderRadius: SizeValue
  progressSickness: number
}

export interface Transition {
  easing: {
    [Easing.EaseIn]: string
    [Easing.EaseInOut]: string
    [Easing.EaseOut]: string
    [Easing.Sharp]: string
  }
  duration: {
    [Duration.Shortest]: number
    [Duration.Shorter]: number
    [Duration.Short]: number
    [Duration.Default]: number
    [Duration.Complex]: number
    [Duration.EnteringScreen]: number
    [Duration.LeavingScreen]: number
  }
}

export type Elevation = {
  [key in ElevationLevel]: string
}

export type BreakpointSet = {
  [Size.Zero]: SizeValue
  [Size.Tiny]: SizeValue
  [Size.Small]: SizeValue
  [Size.Medium]: SizeValue
  [Size.Large]: SizeValue
  [Size.ExtraLarge]: SizeValue
}

export type ZIndexSet = {
  app: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

export interface Theme {
  color: Color
  shape: Shape
  typography: Typography
  spacing: Spacing
  palette: Palette
  transition: Transition
  elevation: Elevation
  breakpoint: BreakpointSet
  zIndex: ZIndexSet
}
