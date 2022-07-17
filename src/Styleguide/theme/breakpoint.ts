import { Size } from '../types'
import { BreakpointSet } from './types'
import { SizeValue } from '../value'

// Keep the order from small to big as we do build prioritized maps to compare sizes
const breakpoint: BreakpointSet = {
  [Size.Zero]: new SizeValue(0),
  [Size.Tiny]: new SizeValue(380),
  [Size.Small]: new SizeValue(768),
  [Size.Medium]: new SizeValue(960),
  [Size.Large]: new SizeValue(1280),
  [Size.ExtraLarge]: new SizeValue(1600),
}

export default breakpoint
