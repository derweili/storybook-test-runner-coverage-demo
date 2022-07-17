import { TypographyUnit } from '@mycompany/design-system/Styleguide'

export type DisplayComponentMap = {
  [key in TypographyUnit]: keyof JSX.IntrinsicElements
}

export enum TypographyAlign {
  Right = 'right',
  Left = 'left',
}
