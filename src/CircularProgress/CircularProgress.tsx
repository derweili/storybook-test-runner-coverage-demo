import React from 'react'
import {
  Variant,
  ColorValue,
  Status,
  Size,
} from '@mycompany/design-system/Styleguide'
import { useTheme } from '@mycompany/design-system/ReactUtils'
import { State } from './types'
import CircularProgressRoot from './CircularProgressRoot'
import CircularProgressSVG from './CircularProgressSVG'
import CircularProgressCircle from './CircularProgressCircle'

const SVG_VIEWBOX_SIZE = 44

type Props = {
  state: State
  value?: number
  size?: Size
  variant?: Variant
  overrideColor?: ColorValue
  inherit?: boolean
  status?: Status
  spacing?: Size | false
  className?: string
}

const defaultSize = Size.Medium
const defaultVariant = Variant.Primary
const defaultStatus = Status.Default
const defaultSpacing = Size.Medium

const CircularProgress: React.FC<Props> = React.forwardRef<
  HTMLSpanElement,
  Props
>(
  (
    {
      state,
      value = 0,
      size = defaultSize,
      variant = defaultVariant,
      overrideColor,
      spacing = defaultSpacing,
      status = defaultStatus,
      inherit = false,
      className,
      ...htmlAttributes
    }: Props,
    ref
  ) => {
    const theme = useTheme()
    const circleStyle: React.CSSProperties = {}
    const rootStyle: React.CSSProperties = {}
    const rootProps: React.HTMLAttributes<HTMLSpanElement> = {}

    if (state === State.Determinate) {
      const circumference =
        2 * Math.PI * ((SVG_VIEWBOX_SIZE - theme.shape.progressSickness) / 2)
      circleStyle.strokeDasharray = circumference.toFixed(3)
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`
      rootStyle.transform = 'rotate(-90deg)'

      // A11y
      rootProps['aria-valuenow'] = Math.round(value)
      rootProps['aria-valuemin'] = 0
      rootProps['aria-valuemax'] = 100
    }

    if (overrideColor) {
      rootStyle.color = overrideColor.hex()
    }

    const actualSize = theme.spacing.size[size].multiply(2).rem()

    return (
      <CircularProgressRoot
        ref={ref}
        role="progressbar"
        style={{ width: actualSize, height: actualSize, ...rootStyle }}
        state={state}
        variant={variant}
        spacing={spacing}
        status={status}
        inherit={inherit}
        className={className}
        {...rootProps}
        {...htmlAttributes}
      >
        <CircularProgressSVG
          viewBox={`${SVG_VIEWBOX_SIZE / 2} ${
            SVG_VIEWBOX_SIZE / 2
          } ${SVG_VIEWBOX_SIZE} ${SVG_VIEWBOX_SIZE}`}
        >
          <CircularProgressCircle
            style={circleStyle}
            cx={SVG_VIEWBOX_SIZE}
            cy={SVG_VIEWBOX_SIZE}
            r={(SVG_VIEWBOX_SIZE - theme.shape.progressSickness) / 2}
            state={state}
            fill="none"
            strokeWidth={theme.shape.progressSickness}
          />
        </CircularProgressSVG>
      </CircularProgressRoot>
    )
  }
)

export default CircularProgress
