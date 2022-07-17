import React from 'react'
import { Size, Variant } from '@mycompany/design-system/Styleguide'
import TextLinkRoot from './TextLinkRoot'

type Props = React.PropsWithChildren<{
  spacing?: Size | 0
  href: string
  fullWidth?: boolean
  className?: string
  attachment?: React.ReactNode
  variant?: Variant
  underline?: boolean | false
}>

const defaultSpacing = 0
const defaultVariant = Variant.Primary
const defaultUnderline = true

const TextLink: React.FC<Props> = React.forwardRef<HTMLAnchorElement, Props>(
  (
    {
      href,
      attachment,
      spacing = defaultSpacing,
      className,
      fullWidth = false,
      variant = defaultVariant,
      underline = defaultUnderline,
      children,
      ...htmlAttributes
    }: React.PropsWithChildren<Props>,
    ref
  ) => (
    <TextLinkRoot
      attachment={attachment}
      ref={ref}
      href={href}
      fullWidth={fullWidth}
      variant={variant}
      underline={underline}
      data-testid="typography-link"
      spacing={spacing}
      className={className}
      {...htmlAttributes}
    >
      {attachment !== null && attachment}
      {children !== null && children}
    </TextLinkRoot>
  )
)

export default TextLink
