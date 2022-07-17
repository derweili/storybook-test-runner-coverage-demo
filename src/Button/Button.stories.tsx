import React from 'react'
import { Button } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ElevationLevel, Size, Status, Variant } from '../Styleguide'
import { HeartIcon } from '../Icon'
import { AttachmentPos } from './types'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    variant: {
      options: Object.keys(Variant),
      mapping: Variant,
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(Size),
      mapping: Size,
      control: { type: 'radio' },
      description:
        'Sizes `Size.Tiny` and `Size.ExtraLarge` are not available for a Button Component, they will fallback on the next size.',
    },
    pill: {
      control: { type: 'boolean' },
      description:
        'Deprication Warning: We should not use the pill button anymore (questions to: [Andreas von Borstel](https://mycompany.slack.com/archives/D01NGLV7GTS)).',
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    elevation: {
      options: Object.keys(ElevationLevel),
      mapping: ElevationLevel,
      control: { type: 'radio' },
    },
    status: {
      options: Object.keys(Status),
      mapping: Status,
      control: { type: 'radio' },
    },
    spacing: {
      options: Object.keys(Size),
      mapping: Size,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: 'onFocus$|onBlur$|onClick$' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Introduction: ComponentStory<typeof Button> = Template.bind({})

Introduction.args = { label: 'We ♥ mycompany' }

/**
 * Variant
 */
export const VariantPrimary: ComponentStory<typeof Button> = Template.bind({})

VariantPrimary.args = { label: 'Primary Button', variant: Variant.Primary }

export const VariantSecondary: ComponentStory<typeof Button> = Template.bind({})

VariantSecondary.args = {
  label: 'Secondary Button',
  variant: Variant.Secondary,
}

/**
 * Status
 */
export const StatusSuccess: ComponentStory<typeof Button> = Template.bind({})
StatusSuccess.args = { label: 'Status Success', status: Status.Success }

export const StatusWarning: ComponentStory<typeof Button> = Template.bind({})
StatusWarning.args = { label: 'Status Watning', status: Status.Warning }

export const StatusError: ComponentStory<typeof Button> = Template.bind({})
StatusError.args = { label: 'Status Watning', status: Status.Error }

/**
 * Sizes
 */
export const SizesSmall: ComponentStory<typeof Button> = Template.bind({})
SizesSmall.args = { label: 'Size Small', size: Size.Small }

export const SizesMedium: ComponentStory<typeof Button> = Template.bind({})
SizesMedium.args = { label: 'Size Medium', size: Size.Medium }

/**
 * Pill
 */
export const Pill: ComponentStory<typeof Button> = Template.bind({})
Pill.args = { label: 'Pill', pill: true }

/**
 * FullWidth
 */
export const FullWidth: ComponentStory<typeof Button> = Template.bind({})
FullWidth.args = { label: 'FullWidth', fullWidth: true }

/**
 * Loading
 */
export const Loading: ComponentStory<typeof Button> = Template.bind({})
Loading.args = { label: 'Loading', loading: true }

/**
 * Disabled
 */
export const Disabled: ComponentStory<typeof Button> = Template.bind({})
Disabled.args = { label: 'Disabled', disabled: true }

/**
 * Elevation
 */
export const Elevation: ComponentStory<typeof Button> = Template.bind({})
Elevation.args = { label: 'Elevation', elevation: ElevationLevel.Secondary }

/**
 * Attachment
 */
export const AttachmentBasic: ComponentStory<typeof Button> = Template.bind({})
AttachmentBasic.args = {
  label: 'Attachment Button',
  attachment: (
    <div
      style={{
        color: '#ff66cc',
      }}
    >
      <HeartIcon />
    </div>
  ),
}

export const AttachmentIconLeft: ComponentStory<typeof Button> = Template.bind(
  {}
)
AttachmentIconLeft.args = {
  ...AttachmentBasic.args,
  attachmentPos: AttachmentPos.Left,
}

export const AttachmentIconOnly: ComponentStory<typeof Button> = Template.bind(
  {}
)
AttachmentIconOnly.args = {
  ...AttachmentBasic.args,
  label: undefined,
}
