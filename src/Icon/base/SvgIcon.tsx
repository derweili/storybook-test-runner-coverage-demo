import React from 'react'
import SvgIconRoot from './SvgIconRoot'
import { IconName } from '../types'

type Props = {
  stroke?: string
  strokeWidth?: string
  strokeLinejoin?: CanvasLineJoin
  strokeLinecap?: CanvasLineCap
  fill?: boolean | object
  viewBox?: string
  width?: string
  height?: string
  payments?: boolean
  social?: boolean
  children: React.ReactNode
  displayName: IconName
  className?: string
}

const SvgIcon: React.FC<Props> = React.forwardRef<SVGSVGElement, Props>(
  (
    {
      fill,
      width,
      height,
      viewBox = '0 0 24 24',
      payments = false,
      strokeLinejoin,
      strokeLinecap,
      stroke,
      social = false,
      strokeWidth,
      children,
      displayName,
      className,
      ...htmlAttributes
    }: Props,
    ref
  ) => (
    <SvgIconRoot
      width={width}
      height={height}
      title={displayName}
      ref={ref}
      viewBox={viewBox}
      payments={payments}
      social={social}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      fill={fill ? 'currentColor' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-hidden="true"
      tabIndex={-1}
      data-testid={`icon-${displayName}`}
      className={className}
      {...htmlAttributes}
    >
      {children}
    </SvgIconRoot>
  )
)

SvgIcon.defaultProps = {
  className: undefined,
  fill: false,
}

export default SvgIcon
