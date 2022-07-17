import React from 'react'
import { ContentBox } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size } from '../Styleguide'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/ContentBox',
  component: ContentBox,
  argTypes: {
    spacing: {
      options: Size,
      control: { type: 'radio' },
    },
    border: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof ContentBox>

const Template: ComponentStory<typeof ContentBox> = (args) => (
  <ContentBox {...args}>
    <h2>contentBox</h2>
  </ContentBox>
)

export const Introduction: ComponentStory<typeof ContentBox> = Template.bind({})

Introduction.args = { border: true }
