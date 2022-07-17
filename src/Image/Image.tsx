import React from 'react'
import { ObjectFit, Size } from '@mycompany/design-system/Styleguide'

import ImageRoot from './ImageRoot'

type Props = React.PropsWithChildren<{
  spacing?: Size
  src: string
  className?: string
  objectFit?: ObjectFit
}>

const defaultSpacing = Size.Medium

const Image: React.FC<Props> = React.forwardRef<HTMLImageElement, Props>(
  (
    {
      src,
      spacing = defaultSpacing,
      className,
      objectFit,
    }: React.PropsWithChildren<Props>,
    ref
  ) => (
    <ImageRoot
      ref={ref}
      src={src}
      data-testid="image"
      spacing={spacing}
      className={className}
      objectFit={objectFit}
    />
  )
)

export default Image
