/* eslint-disable import/no-extraneous-dependencies */
import { addons } from '@storybook/addons';
import avocoadostoreTheme from './avocoadostoreTheme';

addons.setConfig({
  theme: avocoadostoreTheme,
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
});
