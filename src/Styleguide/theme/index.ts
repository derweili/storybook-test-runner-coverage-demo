import color from './color'
import shape from './shape'
import palette from './palette'
import spacing from './spacing'
import transition from './transition'
import typography from './typography'
import elevation from './elevation'
import breakpoint from './breakpoint'
import zIndex from './zIndex'
import { Theme, TypographyUnit } from './types'

const theme: Theme = {
  color,
  shape,
  typography,
  spacing,
  palette,
  transition,
  elevation,
  breakpoint,
  zIndex,
}

export type { Theme }
export { TypographyUnit }
export default theme
