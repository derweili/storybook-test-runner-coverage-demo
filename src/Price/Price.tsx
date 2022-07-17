import React from 'react'
import {
  Size,
  TypographyUnit,
  FlexboxWrap,
  FlexboxDirection,
  FlexboxAlignItems,
  Variant,
} from '@mycompany/design-system/Styleguide'
import { Typography, Currency, Status } from '@mycompany/design-system/index'

import { useTranslation } from 'react-i18next'
import { PriceList, PriceRoot } from './PriceRoot'

type Props = React.PropsWithChildren<{
  spacing?: Size | false
  uvp?: boolean
  currency?: Currency
  display?: TypographyUnit
  productPrice?: string | null
  basePrice?: string | null
  discount?: string | null
  recommendedPrice?: string | null
  bestPrice?: string | null
  bestPriceDiscount?: string | null
  direction?: FlexboxDirection
  wrap?: FlexboxWrap
  align?: FlexboxAlignItems
}>

const defaultSpacing = Size.Medium

const Price: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      spacing = defaultSpacing,
      display = TypographyUnit.Base,
      productPrice,
      basePrice,
      wrap,
      uvp = false,
      currency = Currency.Euro,
      direction,
      discount,
      recommendedPrice,
      bestPrice,
      bestPriceDiscount,
      align = FlexboxAlignItems.FlexStart,
    }: React.PropsWithChildren<Props>,
    ref
  ) => {
    const { t } = useTranslation(['translation'])

    const currencyString = currency !== Currency.None ? currency : false

    const hasSale = recommendedPrice && recommendedPrice !== '0,00 €'

    return (
      <PriceRoot
        ref={ref}
        data-testid="price"
        spacing={spacing}
        wrap={wrap}
        discount={discount}
        productPrice={productPrice}
        align={align}
        data-tracking-price={productPrice}
      >
        <PriceList direction={direction} align={align}>
          <Typography
            display={display}
            status={hasSale ? Status.Discount : undefined}
            data-testid="product-price"
          >
            <strong>
              {productPrice} {currency && currencyString}
            </strong>
          </Typography>
          {basePrice && (
            <Typography
              display={TypographyUnit.Caption}
              variant={Variant.Secondary}
              data-testid="base-price"
            >
              ({basePrice})
            </Typography>
          )}
          {recommendedPrice && (
            <>
              <Typography
                display={TypographyUnit.Caption}
                variant={Variant.Secondary}
                data-testid="recommended-price"
              >
                <s>
                  {uvp && 'UVP:'} {recommendedPrice}{' '}
                  {currency && currencyString}
                </s>
              </Typography>
            </>
          )}
        </PriceList>

        {bestPrice && (
          <Typography
            display={TypographyUnit.Caption}
            lighten={1.5}
            data-testid="best-price"
          >
            {t('cart.items.bestPrice')}*: {bestPrice}{' '}
            {currency && currencyString}
            {bestPriceDiscount && <span>({bestPriceDiscount})</span>}
          </Typography>
        )}
      </PriceRoot>
    )
  }
)

export default Price
