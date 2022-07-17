import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChevronRightIcon } from '@mycompany/design-system/Icon'
import { Size } from '@mycompany/design-system/Styleguide'
import { Navigation, NavigationItem } from './index'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Navigation',
  component: Navigation,
  argTypes: {
    spacing: {
      options: { None: false, ...Size },
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <>
    <Navigation size={Size.Medium} spacing={Size.Medium} {...args}>
      <NavigationItem>
        {`Das Beste fürs Baby`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Deko & Wohnen`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Grüne Küche`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Rucksäcke`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Sneaker`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Vegan`}
        <ChevronRightIcon />
      </NavigationItem>
      <NavigationItem>
        {`Yoga`}
        <ChevronRightIcon />
      </NavigationItem>
    </Navigation>
  </>
)

export const Introduction: ComponentStory<typeof Navigation> = Template.bind({})

export const Vertical: ComponentStory<typeof Navigation> = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
}

export const Horizontal: ComponentStory<typeof Navigation> = (args) => (
  <>
    <Navigation size={Size.Medium} spacing={Size.Medium} {...args}>
      <NavigationItem>{`Das Beste fürs Baby`}</NavigationItem>
      <NavigationItem>{`Deko & Wohnen`}</NavigationItem>
      <NavigationItem>{`Grüne Küche`}</NavigationItem>
      <NavigationItem>{`Rucksäcke`}</NavigationItem>
      <NavigationItem>{`Sneaker`}</NavigationItem>
      <NavigationItem>{`Vegan`}</NavigationItem>
      <NavigationItem>{`Yoga`}</NavigationItem>
    </Navigation>
  </>
)
Horizontal.args = {
  orientation: 'horizontal',
}
