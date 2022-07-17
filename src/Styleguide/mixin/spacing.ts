import { css, StyledProps } from 'styled-components'
import { Size } from '../types'

export default (props: StyledProps<{ spacing: Size | false }>) => css`
  padding: ${props.spacing ? props.theme.spacing.size[props.spacing].rem() : 0};
`
