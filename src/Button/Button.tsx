import React from 'react'
import Ink from 'react-ink'
import { useTranslation } from 'react-i18next'
import {
  Size,
  Variant,
  Status,
  ElevationLevel,
} from '@mycompany/design-system/Styleguide'
import { CircularProgressState } from '@mycompany/design-system/CircularProgress'
import ButtonRoot from './ButtonRoot'
import ButtonAttachement from './ButtonAttachment'
import ButtonLoadingIndicator from './ButtonLoadingIndicator'
import ButtonLabel from './ButtonLabel'
import { AttachmentPos } from './types'

type CleanButtonAttributes = Omit<
  Omit<
    Omit<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>, 'type'>,
    'onPointerEnterCapture'
  >,
  'onPointerLeaveCapture'
>

type Props = {
  label?: string
  size?: Size
  variant?: Variant
  status?: Status
  iconOnly?: boolean
  pill?: boolean
  ripple?: boolean
  link?: boolean
  noBackground?: boolean
  fullWidth?: boolean
  disabled?: boolean
  submit?: boolean
  elevation?: ElevationLevel
  spacing?: Size | false
  loading?: boolean
  attachment?: React.ReactNode
  attachmentPos?: AttachmentPos
  onClick?: (event: React.MouseEvent) => void
  className?: string
} & CleanButtonAttributes

// prebinding only required to avoid a storybook bug. Should be inlined
const defaultSize = Size.Medium
const defaultSpacing = Size.Medium
const defaultVariant = Variant.Primary
const defaultStatus = Status.Default
const defaultElevation = ElevationLevel.None

const Button: React.FC<Props> = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      onClick = () => {},
      label,
      attachmentPos = AttachmentPos.Right,
      attachment,
      disabled = false,
      fullWidth = false,
      loading = false,
      iconOnly = false,
      pill = false,
      ripple = false,
      link = false,
      noBackground = false,
      submit = false,
      elevation = defaultElevation,
      size = defaultSize,
      spacing = defaultSpacing,
      variant = defaultVariant,
      status = defaultStatus,
      className,
      ...htmlAttributes
    }: Props,
    ref
  ) => {
    const { t } = useTranslation()

    return (
      <ButtonRoot
        ref={ref}
        iconOnly={iconOnly}
        data-testid="button"
        tabIndex={0}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        size={size}
        elementSpacing={spacing}
        variant={variant}
        elevation={elevation}
        fullWidth={fullWidth}
        pill={pill}
        link={link}
        noBackground={noBackground}
        status={status}
        isLoading={loading}
        hasLabel={!!label}
        attachmentPos={attachmentPos}
        onClick={(event: React.MouseEvent) =>
          !disabled && !loading && onClick(event)
        }
        className={className}
        {...htmlAttributes}
      >
        {label && (
          <ButtonLabel size={size} isLoading={loading}>
            {t(label)}
          </ButtonLabel>
        )}
        {attachment && (
          <ButtonAttachement size={size} isLoading={loading}>
            {attachment}
          </ButtonAttachement>
        )}
        {loading && (
          <ButtonLoadingIndicator
            inherit
            variant={variant}
            status={status}
            size={size}
            state={CircularProgressState.Indeterminate}
          />
        )}
        {ripple && <Ink duration={500} />}
      </ButtonRoot>
    )
  }
)

export default Button
