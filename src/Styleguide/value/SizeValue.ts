import theme from '../theme'

class SizeValue {
  value: number

  constructor(value: number) {
    this.value = value
  }

  px(): string {
    return `${Math.round(this.value)}px`
  }

  rem(): string {
    return `${this.value / theme.typography.base.fontSize.plain()}rem`
  }

  plain(): number {
    return this.value
  }

  divide(divisor: number): SizeValue {
    return new SizeValue(this.value / divisor)
  }

  multiply(multiplier: number): SizeValue {
    return new SizeValue(this.value * multiplier)
  }

  add(value: number): SizeValue {
    return new SizeValue(this.value + value)
  }

  toString(): string {
    return this.px()
  }
}

export default SizeValue
