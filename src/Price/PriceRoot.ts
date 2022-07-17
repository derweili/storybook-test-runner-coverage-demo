import styled, { css } from 'styled-components'
import {
  Size,
  FlexboxWrap,
  FlexboxDirection,
  FlexboxAlignItems,
} from '@mycompany/design-system/Styleguide'

type PriceRootProps = {
  spacing?: Size | false
  productPrice?: string | null
  discountPrice?: string
  discount?: string | null
  wrap?: FlexboxWrap
  align?: FlexboxAlignItems
}

export const PriceRoot = styled.div<PriceRootProps>`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  white-space: nowrap;
  gap: 0 5px;
  flex-direction: column;

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `}
  }
`

type PriceListProps = {
  direction?: FlexboxDirection
  align?: FlexboxAlignItems
}

export const PriceList = styled.div<PriceListProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: 0 5px;
  align-items: ${({ align }) => align || 'flex-start'};
`
