import {
  css,
  ThemedCssFunction,
  DefaultTheme,
  CSSObject,
  SimpleInterpolation,
} from 'styled-components'
import { Size } from '../types'
import { QuerySet } from './types'
import theme from '../theme'

const { breakpoint } = theme

const mediaQueryWrapperFactory: (
  query: string
) => ThemedCssFunction<DefaultTheme> =
  (query: string) =>
  (
    strings: TemplateStringsArray | CSSObject,
    values: SimpleInterpolation,
    ...args: any
  ) =>
    css`
      @media ${query} {
        ${css(strings, values, ...args)}
      }
    `

type MinBreakpointSize =
  | Size.Zero
  | Size.Tiny
  | Size.Small
  | Size.Medium
  | Size.Large
  | Size.ExtraLarge
type MaxBreakpointSize =
  | Size.Zero
  | Size.Tiny
  | Size.Small
  | Size.Medium
  | Size.Large

const nextMap: { [key in MaxBreakpointSize]: MinBreakpointSize } = {
  [Size.Zero]: Size.Tiny,
  [Size.Tiny]: Size.Small,
  [Size.Small]: Size.Medium,
  [Size.Medium]: Size.Large,
  [Size.Large]: Size.ExtraLarge,
}

const query: QuerySet = {
  min: (key: MinBreakpointSize) =>
    mediaQueryWrapperFactory(`(min-width: ${breakpoint[key].px()})`),
  max: (key: MaxBreakpointSize) =>
    mediaQueryWrapperFactory(
      `(max-width: ${breakpoint[nextMap[key]].add(-1).px()})`
    ),
  between: (start: MinBreakpointSize, end: MaxBreakpointSize) =>
    mediaQueryWrapperFactory(
      `(min-width: ${breakpoint[start].px()}) and (max-width: ${breakpoint[
        nextMap[end]
      ]
        .add(-1)
        .px()})`
    ),
}

export default query
