import { SizeValue } from '../value'
import { Spacing } from './types'
import { Size } from '../types'

const baseScale = new SizeValue(8)

const baseZero = new SizeValue(0)

const spacing: Spacing = {
  base: baseScale,
  size: {
    [Size.Zero]: baseZero,
    [Size.Tiny]: baseScale.multiply(0.25),
    [Size.Small]: baseScale.multiply(0.5),
    [Size.Medium]: baseScale,
    [Size.Large]: baseScale.multiply(2),
    [Size.ExtraLarge]: baseScale.multiply(4),
  },
}

export default spacing
