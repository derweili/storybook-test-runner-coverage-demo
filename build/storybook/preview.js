/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@mycompany/design-system/ThemeProvider'
import { CssBaseline } from '@mycompany/design-system/CssBaseline'
import { I18nextProvider } from 'react-i18next'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import i18n from './i18n'

const customViewports = {
  mobile1: {
    name: 'Zero Breakpoint',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Tiny Breakpoint',
    styles: {
      height: '896px',
      width: '380px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Small Breakpoint',
    styles: {
      height: '1112px',
      width: '768px',
    },
    type: 'tablet',
  },
  medium: {
    name: 'Medium Breakpoint',
    styles: {
      height: '1000px',
      width: '960px',
    },
    type: 'desktop',
  },
  large: {
    name: 'Large Breakpoint',
    styles: {
      height: '1000px',
      width: '1280px',
    },
    type: 'desktop',
  },
  extraLarge: {
    name: 'Extra Large Breakpoint',
    styles: {
      height: '1200px',
      width: '1600px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Component catalog',
        'Component status',
        'Roadmap',
        'Getting Started',
        'Styleguide',
        'Helper',
        'Component',
        'Change log',
      ],
    },
  },
  backgrounds: {
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16,
      offsetY: 16,
    },
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'patone',
        value: '#7d9917',
      },
      {
        name: 'alabaster',
        value: '#F1F0EB',
      },
      {
        name: 'nero',
        value: '#2A2A2A',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
}

export const decorators = [
  (storyFn) => (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <CssBaseline />
        {storyFn()}
      </ThemeProvider>
    </I18nextProvider>
  ),
]
