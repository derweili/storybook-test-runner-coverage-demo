import {} from 'styled-components'
import { Theme } from '@mycompany/design-system/Styleguide'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
