/* eslint-disable import/no-extraneous-dependencies */
import { create } from '@storybook/theming'
import { theme } from '../../src/Styleguide'

export default create({
  base: 'light',
  brandTitle: 'mycompany',
  brandUrl: 'https://brand.mycompany.de',

  colorPrimary: theme.color.variant.primary.base.hex(),
  colorSecondary: theme.color.variant.primary.base.hex(),

  // UI
  appBg: theme.color.appBackground.hex(),
  appContentBg: theme.color.contentBackground.hex(),
  appBorderColor: theme.color.divider.hex(),
  appBorderRadius: theme.shape.borderRadius.plain(),

  // Typography
  fontBase: theme.typography.base.fontFamily,
  fontCode: 'monospace',

  // Text colors
  textColor: theme.color.font.hex(),
  textInverseColor: theme.palette.white.hex(),

  // Toolbar default and active colors
  barTextColor: theme.color.font.hex(),
  barSelectedColor: theme.color.variant.primary.base.hex(),
  barBg: '#f2f2f2',

  // Form colors
  inputBg: theme.color.contentBackground.hex(),
  inputBorder: theme.color.divider.hex(),
  inputTextColor: theme.color.contentBackground.hex(),
  inputBorderRadius: theme.shape.borderRadius.plain(),
})
