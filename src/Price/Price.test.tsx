import React from 'react'
// import { Price } from './'
// import { render } from '../__tests__/utils/render'
// import { screen } from '@testing-library/react'
// import { Currency } from '@mycompany/design-system/index'
// import { render } from 'react-dom'
// import { render } from '@testing-library/react';
import {
  SimplePrice,
  WithoutUvp,
  FullPrice,
  WithoutBestPriceDiscount,
} from './Price.stories'
import { render } from '../__tests__/utils/render'
import { screen } from '@testing-library/react'

describe('`<Price>`', () => {
  it('should only render product price', () => {
    render(<SimplePrice {...SimplePrice.args} />)

    expect(screen.getByTestId('price')).toBeVisible()

    expect(screen.getByTestId('price').textContent).toContain(
      SimplePrice.args?.productPrice
    )

    expect(screen.getByTestId('product-price')).toBeVisible()
    expect(screen.queryByTestId('recommended-price')).not.toBeInTheDocument()
    expect(screen.queryByTestId('base-price')).not.toBeInTheDocument()
    expect(screen.queryByTestId('best-price')).not.toBeInTheDocument()
  })

  it('should render price tracking data', () => {
    const { container } = render(<SimplePrice {...SimplePrice.args} />)

    expect(
      container.querySelector(
        `[data-tracking-price="${SimplePrice.args?.productPrice}"]`
      )
    ).toBeInTheDocument()
  })

  it('should render all price information', () => {
    // render(<Price {...args}/>)
    const { getByTestId } = render(<FullPrice {...FullPrice.args} />)

    expect(getByTestId('price')).toBeVisible()

    expect(getByTestId('product-price').textContent).toContain(
      FullPrice.args?.productPrice
    )

    expect(screen.getByTestId('price')).toBeVisible()
    expect(screen.getByTestId('product-price')).toBeVisible()
    expect(screen.getByTestId('recommended-price')).toBeVisible()
    expect(screen.getByTestId('recommended-price').textContent).toBe(
      'UVP: 100€ '
    )
    expect(screen.getByTestId('base-price')).toBeVisible()
    expect(screen.getByTestId('best-price')).toBeVisible()
  })

  it('should render price without uvp', () => {
    render(<WithoutUvp {...WithoutUvp.args} />)
    expect(screen.getByTestId('recommended-price').textContent).toBe(' 100€ ')
    expect(screen.getByTestId('recommended-price').textContent).not.toContain(
      'UVP'
    )
  })

  it('should render best price without best price discount', () => {
    render(<WithoutBestPriceDiscount {...WithoutBestPriceDiscount.args} />)
    expect(screen.getByTestId('best-price').textContent).toContain(
      WithoutBestPriceDiscount.args?.bestPrice
    )
  })
})
