import React from 'react'
import { Hidden } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size } from '../Styleguide'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/CategorieBanner',
  component: Hidden,
  argTypes: {
    up: {
      options: { None: false, ...Size },
      control: { type: 'radio' },
    },
    down: {
      options: { None: false, ...Size },
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Hidden>

export const Introduction: ComponentStory<typeof Hidden> = (args) => (
  <Hidden {...args}>I am visible</Hidden>
)

export const Up: ComponentStory<typeof Hidden> = (args) => (
  <Hidden {...args}>I am visible on &#62;= Size.Medium</Hidden>
)
Up.args = {
  up: Size.Medium,
}

export const Down: ComponentStory<typeof Hidden> = (args) => (
  <Hidden {...args}>I am visible on &#60;= Size.Medium</Hidden>
)
Down.args = {
  down: Size.Medium,
}
