import React from 'react'
import { Size, Variant } from '@mycompany/design-system/Styleguide'
import { Opacity } from '@mycompany/design-system/index'

import ContentBoxRoot from './ContentBoxRoot'

type Props = React.PropsWithChildren<{
  background?: Variant
  spacing?: Size
  opacity?: Opacity
  border?: boolean | false
  margin?: Size | string | object
  className?: string
}>

const defaultSpacing = Size.Medium

const ContentBox: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      border,
      background,
      spacing = defaultSpacing,
      margin = Size.Zero,
      className,
      opacity = Opacity.Base,
      children,
    }: React.PropsWithChildren<Props>,
    ref
  ) => (
    <ContentBoxRoot
      ref={ref}
      background={background}
      opacity={opacity}
      border={border}
      margin={margin}
      data-testid="content-box"
      spacing={spacing}
      className={className}
    >
      {children}
    </ContentBoxRoot>
  )
)

export default ContentBox
