import { ThemedCssFunction, DefaultTheme } from 'styled-components'
import { Size } from '../types'

export interface QuerySet {
  min: (key: Size) => ThemedCssFunction<DefaultTheme>
  max: (key: Size) => ThemedCssFunction<DefaultTheme>
  between: (start: Size, end: Size) => ThemedCssFunction<DefaultTheme>
}
