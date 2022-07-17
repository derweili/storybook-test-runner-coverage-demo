import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { within } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

import { Price } from '.'
import { Size, TypographyUnit } from '@mycompany/design-system/Styleguide'
import { FlexboxDirection, Currency } from '@mycompany/design-system/index'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Price',
  component: Price,
  argTypes: {
    spacing: {
      options: Size,
      control: { type: 'radio' },
    },
    display: {
      options: TypographyUnit,
      control: { type: 'radio' },
    },
    direction: {
      options: [FlexboxDirection.Row, FlexboxDirection.Column],
      control: { type: 'radio' },
    },
    currency: {
      options: Currency,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const SimplePrice: ComponentStory<typeof Price> = Template.bind({})
SimplePrice.args = {
  productPrice: '33,33 €',
  currency: Currency.None,
}

SimplePrice.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('price')).toBeVisible()
  expect(canvas.getByTestId('product-price').textContent).toContain(
    SimplePrice.args?.productPrice
  )
  expect(canvas.queryByTestId('recommended-price')).not.toBeInTheDocument()
  expect(canvas.queryByTestId('base-price')).not.toBeInTheDocument()
  expect(canvas.queryByTestId('best-price')).not.toBeInTheDocument()
}

export const WithBasePrice: ComponentStory<typeof Price> = Template.bind({})
WithBasePrice.args = {
  ...SimplePrice.args,
  basePrice: '20,00 € / Stück',
}

WithBasePrice.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('base-price').textContent).toContain(
    `(${WithBasePrice.args?.basePrice})`
  )
}

export const FullPrice: ComponentStory<typeof Price> = Template.bind({})

FullPrice.args = {
  ...SimplePrice.args,
  recommendedPrice: '100€',
  basePrice: '20,00 € / Stück',
  bestPrice: '40,00 €',
  bestPriceDiscount: '-20%',
  uvp: true,
}

FullPrice.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('price')).toBeVisible()
  expect(canvas.getByTestId('product-price')).toBeVisible()
  expect(canvas.getByTestId('recommended-price')).toBeVisible()
  expect(canvas.getByTestId('recommended-price').textContent).toBe('UVP: 100€ ')
  expect(canvas.getByTestId('base-price')).toBeVisible()
  expect(canvas.getByTestId('best-price')).toBeVisible()
}

export const WithoutUvp: ComponentStory<typeof Price> = Template.bind({})
WithoutUvp.args = {
  ...FullPrice.args,
  uvp: false,
}

WithoutUvp.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('recommended-price').textContent).not.toContain(
    'UVP'
  )
}

export const WithoutBestPriceDiscount: ComponentStory<typeof Price> =
  Template.bind({})
WithoutBestPriceDiscount.args = {
  ...FullPrice.args,
  bestPriceDiscount: null,
  bestPrice: FullPrice.args.productPrice,
  basePrice: null,
}

WithoutBestPriceDiscount.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('best-price').textContent).toContain(
    WithoutBestPriceDiscount.args?.bestPrice
  )
}

export const LineItems: ComponentStory<typeof Price> = Template.bind({})

LineItems.args = {
  ...SimplePrice.args,
  recommendedPrice: '100€',
  bestPrice: '40,00 €',
  bestPriceDiscount: '-20%',
  uvp: true,
  direction: FlexboxDirection.Column,
}

LineItems.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)
  // Starts querying the component from its root element
  expect(canvas.getByTestId('price')).toBeVisible()
  expect(canvas.getByTestId('product-price')).toBeVisible()
  expect(canvas.getByTestId('recommended-price')).toBeVisible()
  expect(canvas.getByTestId('recommended-price').textContent).toBe('UVP: 100€ ')
  expect(canvas.getByTestId('best-price')).toBeVisible()
}
