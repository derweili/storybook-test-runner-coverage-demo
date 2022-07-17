import React from 'react'
import { Container } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size } from '../Styleguide'
import { Behavior } from './types'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Container',
  component: Container,
  argTypes: {
    behavior: {
      options: Behavior,
      control: { type: 'radio' },
    },
    spacing: {
      options: { None: false, ...Size },
      control: { type: 'radio' },
    },
  },
  decorators: [
    (storyFn) => (
      <div style={{ background: '#eeeeee', padding: '1rem' }}>
        <div
          style={{
            background: '#ffffff',
            boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          {storyFn()}
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <div style={{ background: '#7D9917', width: '100%', height: '50vh' }} />
  </Container>
)

export const Introduction: ComponentStory<typeof Container> = Template.bind({})

export const BehaviorFixed: ComponentStory<typeof Container> = Template.bind({})
BehaviorFixed.args = {
  behavior: Behavior.Fixed,
}
