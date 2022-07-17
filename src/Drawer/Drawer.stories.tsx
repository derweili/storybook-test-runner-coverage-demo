import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mycompany/design-system/Button'
import Drawer from './Drawer'
import DrawerProvider from './DrawerProvider'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Drawer',
  component: Drawer,
  argTypes: {},
  decorators: [
    (storyFn, context) => {
      const [isVisible, setIsVisible] = useState(false)
      return (
        <DrawerProvider identifier={context.id}>
          <Button label="Show Drawer" onClick={() => setIsVisible(true)} />
          {storyFn({
            visible: isVisible,
            onClose: () => setIsVisible(false),
            identifier: context.id,
          })}
        </DrawerProvider>
      )
    },
  ],
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (
  args: any,
  { identifier, visible, onClose }: any
) => (
  <Drawer {...args} identifier={identifier} visible={visible} onClose={onClose}>
    <div data-testid="drawer-content">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>
  </Drawer>
)

export const Introduction: ComponentStory<typeof Drawer> = Template.bind({})

export const Opened: ComponentStory<typeof Drawer> = Template.bind({})
Opened.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)

  expect(canvas.queryByTestId('drawer-content')).not.toBeInTheDocument()
  userEvent.click(canvasElement.querySelector('button'))
  expect(canvas.queryByTestId('drawer-content')).toBeInTheDocument()
}

export const OpenAndClose: ComponentStory<typeof Drawer> = Template.bind({})
OpenAndClose.play = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)

  expect(canvas.queryByTestId('drawer-content')).not.toBeInTheDocument()
  userEvent.click(canvasElement.querySelector('button'))
  expect(canvas.queryByTestId('drawer-content')).toBeInTheDocument()
  await new Promise((res) => setTimeout(res, 1000)) // wait 1 second before closing drawer
  userEvent.click(canvasElement.querySelectorAll('button')[1])
  expect(canvas.queryByTestId('drawer-content')).not.toBeInTheDocument()
}
