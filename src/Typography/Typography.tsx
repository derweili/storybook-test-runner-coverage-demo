import React from 'react'
import {
  Status,
  TypographyUnit,
  Size,
  Variant,
} from '@mycompany/design-system/Styleguide'

import TypographyRoot from './TypographyRoot'

import { DisplayComponentMap, TypographyAlign } from './types'

type Props = React.PropsWithChildren<{
  align?: TypographyAlign
  display: TypographyUnit
  lighten?: number | false
  through?: boolean
  component?: keyof JSX.IntrinsicElements
  status?: Status
  variant?: Variant
  spacing?: Size | false
  className?: string
}>

/* @TODO inline constants, only a storybook react-docgen-typescript quickfix */
const defaultStatus = Status.Default
const defaultSpacing = Size.Zero

const Typography: React.FC<Props> = React.forwardRef<HTMLElement, Props>(
  (
    {
      display,
      lighten,
      component,
      children,
      align = TypographyAlign.Left,
      through = false,
      spacing = defaultSpacing,
      status = defaultStatus,
      variant,
      className,
      ...htmlAttributes
    }: React.PropsWithChildren<Props>,
    ref
  ) => (
    <TypographyRoot
      ref={ref}
      lighten={lighten}
      align={align}
      through={through}
      variant={variant}
      as={component || componentMap[display] || 'span'}
      data-testid={`typography-${display}`}
      display={display}
      spacing={spacing}
      status={status}
      className={className}
      {...htmlAttributes}
    >
      {children}
    </TypographyRoot>
  )
)

const componentMap: DisplayComponentMap = {
  [TypographyUnit.Base]: 'p',
  [TypographyUnit.Mobile]: 'p',
  [TypographyUnit.Body1]: 'p',
  [TypographyUnit.Body2]: 'p',
  [TypographyUnit.Headline1]: 'h1',
  [TypographyUnit.Headline2]: 'h2',
  [TypographyUnit.Headline3]: 'h3',
  [TypographyUnit.Headline4]: 'h4',
  [TypographyUnit.Headline5]: 'h5',
  [TypographyUnit.Action]: 'span',
  [TypographyUnit.Input]: 'input',
  [TypographyUnit.Caption]: 'p',
  [TypographyUnit.FootNote]: 'p',
  [TypographyUnit.Label]: 'label',
  [TypographyUnit.FooterHeading]: 'span',
  [TypographyUnit.FooterPhrasing]: 'span',
}

export default Typography
