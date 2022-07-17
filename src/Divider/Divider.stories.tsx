import React from 'react'
import { Divider } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Display, Orientation } from './types'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Introduction: ComponentStory<typeof Divider> = Template.bind({})

Introduction.args = { display: Display.FullWidth }

export const OrientationHorizontal: ComponentStory<typeof Divider> =
  Template.bind({})
OrientationHorizontal.args = { orientation: Orientation.Horizontal }

export const OrientationVertical: ComponentStory<typeof Divider> = (args) => (
  <div style={{ height: 250, display: 'flex', justifyContent: 'center' }}>
    <Divider {...args} />
  </div>
)
Template.bind({})
OrientationVertical.args = { orientation: Orientation.Vertical }
