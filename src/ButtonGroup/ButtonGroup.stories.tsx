import React from 'react'
import { ButtonGroup } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../Button'
import { FlexboxJustification } from '../Styleguide'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    justify: {
      options: FlexboxJustification,
      control: { type: 'radio' },
    },
    squashed: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button label="Some Button" />
    <Button label="Another Button" />
    <Button label="Even one more Button" />
  </ButtonGroup>
)

export const Introduction: ComponentStory<typeof ButtonGroup> = Template.bind(
  {}
)

export const Squashed: ComponentStory<typeof ButtonGroup> = Template.bind({})

Squashed.args = {
  squashed: true,
}

export const Justify: ComponentStory<typeof ButtonGroup> = Template.bind({})

Justify.args = {
  justify: FlexboxJustification.Center,
}
