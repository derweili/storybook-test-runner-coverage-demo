import React from 'react'
import { CircularProgress } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size, Status, Variant } from '../Styleguide'
import { State } from './types'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/CircularProgressnew',
  component: CircularProgress,
  argTypes: {
    state: {
      options: State,
      control: { type: 'radio' },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 },
    },
    variant: {
      options: Variant,
      control: { type: 'radio' },
    },
    size: {
      options: Size,
      control: { type: 'radio' },
    },
    status: {
      options: Status,
      control: { type: 'radio' },
    },
    spacing: {
      options: { None: false, ...Size },
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof CircularProgress>

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
)

export const Introduction: ComponentStory<typeof CircularProgress> =
  Template.bind({})

Introduction.args = { state: State.Indeterminate }

/**
 * States
 */
export const StateDeterminate: ComponentStory<typeof CircularProgress> =
  Template.bind({})

StateDeterminate.args = { state: State.Determinate, value: 42 }

export const StateIndeterminate: ComponentStory<typeof CircularProgress> =
  Template.bind({})

StateIndeterminate.args = {
  ...StateDeterminate.args,
  state: State.Indeterminate,
}

/**
 * Variants
 */
export const VariantPrimary: ComponentStory<typeof CircularProgress> =
  Template.bind({})

VariantPrimary.args = {
  ...StateIndeterminate.args,
  variant: Variant.Primary,
}

export const VariantSecondary: ComponentStory<typeof CircularProgress> =
  Template.bind({})

VariantSecondary.args = {
  ...StateIndeterminate.args,
  variant: Variant.Secondary,
}

/**
 * Status
 */
export const StatusSuccess: ComponentStory<typeof CircularProgress> =
  Template.bind({})

StatusSuccess.args = {
  ...StateIndeterminate.args,
  status: Status.Success,
}

export const StatusWarning: ComponentStory<typeof CircularProgress> =
  Template.bind({})

StatusWarning.args = {
  ...StateIndeterminate.args,
  status: Status.Warning,
}

export const StatusError: ComponentStory<typeof CircularProgress> =
  Template.bind({})

StatusError.args = {
  ...StateIndeterminate.args,
  status: Status.Error,
}

export const Inherit: ComponentStory<typeof CircularProgress> = Template.bind(
  {}
)

Inherit.args = {
  ...StateIndeterminate.args,
  variant: Variant.Secondary,
  inherit: true,
}
