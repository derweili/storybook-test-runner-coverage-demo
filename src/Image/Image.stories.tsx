import React from 'react'
import { Image } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size } from '../Styleguide'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Image',
  component: Image,
  argTypes: {
    spacing: {
      options: Size,
      control: { type: 'radio' },
    },
    src: {
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Introduction: ComponentStory<typeof Image> = Template.bind({})

Introduction.args = {
  src: '#',
}
