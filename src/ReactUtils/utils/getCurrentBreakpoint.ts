import { Size, theme } from '@mycompany/design-system/Styleguide'

export default (windowWidth: number): Size => {
  let currentBreakpoint = Size.Tiny
  Object.keys(Size).some((key: string) => {
    if (theme.breakpoint[Size[key]].plain() > windowWidth) {
      return true
    }
    currentBreakpoint = Size[key]
    return false
  })

  return currentBreakpoint
}
