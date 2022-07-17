import styled from 'styled-components'
import {
  FlexboxAlignment,
  FlexboxDirection,
  FlexboxJustification,
  FlexboxWrap,
  Size,
} from '../Styleguide'

type StackProps = {
  alignment?: FlexboxAlignment
  as?: keyof JSX.IntrinsicElements
  direction?: FlexboxDirection
  justification?: FlexboxJustification
  spacing?: Size
  wrap?: FlexboxWrap
}

type StackItemProps = {
  as?: keyof JSX.IntrinsicElements
  growth?: number
}

export const Stack = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['alignment', 'direction', 'justification', 'spacing', 'wrap'].includes(
      prop
    ),
})<StackProps>`
  align-items: ${({ alignment }) => alignment};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justification }) => justification};
  list-style: none;
  padding: 0;
  ${({ theme, spacing }) =>
    spacing &&
    `
    grid-gap: ${theme.spacing.size[spacing].rem()};
  `};
`

export const StackItem = styled('div').withConfig({
  shouldForwardProp: (prop) => !['growth'].includes(prop),
})<StackItemProps>`
  flex-grow: ${({ growth }) => growth};
`
