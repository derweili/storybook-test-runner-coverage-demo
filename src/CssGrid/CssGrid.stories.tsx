import React from 'react'
import { CssGrid } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Size } from '../Styleguide'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/CssGrid',
  component: CssGrid,
} as ComponentMeta<typeof CssGrid>

import { GridArea, GridColumn } from './types'

export const Introduction: ComponentStory<typeof CssGrid> = (args) => (
  <CssGrid container {...args}>
    <CssGrid item>
      <div className="grid-preview">Default</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">Default</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">Default</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">Default</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">Default</div>
    </CssGrid>
  </CssGrid>
)

export const GridAutoFill: ComponentStory<typeof CssGrid> = () => (
  <CssGrid container gridAutoFill={250}>
    <CssGrid item>
      <div className="grid-preview">auto fill 250</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">auto fill 250</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">auto fill 250</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">auto fill 250</div>
    </CssGrid>
    <CssGrid item>
      <div className="grid-preview">auto fill 250</div>
    </CssGrid>
  </CssGrid>
)

export const GridTemplateWarenkorb: ComponentStory<typeof CssGrid> = () => (
  <CssGrid
    container
    gridTemplate={{ [Size.Medium]: GridArea.Warenkorb }}
    gridColumns={{ [Size.Medium]: GridColumn.WarenkorbTemplate }}
  >
    <CssGrid item gridArea={{ [Size.Medium]: GridArea.Content }}>
      <div className="grid-preview">content</div>
    </CssGrid>
    <CssGrid item gridArea={{ [Size.Medium]: GridArea.Sidebar }}>
      <div className="grid-preview">sidebar</div>
    </CssGrid>
  </CssGrid>
)
