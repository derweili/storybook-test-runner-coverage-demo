import { Size } from '@mycompany/design-system/Styleguide'

type BreakpointValueMap = { [key in Size]: number }

const breakpointValueMap: BreakpointValueMap = Object.values(Size).reduce(
  (accumulator: BreakpointValueMap, currentSize: Size, index: number) => ({
    [currentSize]: index,
    ...accumulator,
  }),
  {} as BreakpointValueMap
)

export const isBreakpointGreaterThan = (size: Size, comparison: Size) =>
  breakpointValueMap[size] > breakpointValueMap[comparison]

export const isBreakpointSmallerThan = (size: Size, comparison: Size) =>
  breakpointValueMap[size] < breakpointValueMap[comparison]
