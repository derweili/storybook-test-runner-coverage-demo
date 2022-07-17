/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const googleFontsLinkTags = `
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
`

module.exports = {
  managerHead: (head) => `${head}${googleFontsLinkTags}`,
  previewHead: (head) => `${head}${googleFontsLinkTags}`,
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-sketch/preset',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-coverage',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  loaders: [
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    paths: {
      '@mycompany/design-system/*': [path.resolve(__dirname, '../../src/*')],
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        sourceMap: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        paths: {
          '@mycompany/design-system/*': [
            path.resolve(__dirname, '../../src/*'),
          ],
        },
      },
      shouldExtractLiteralValuesFromEnum: false,
      shouldExtractValuesFromUnion: false,
      savePropValueAsString: true,
    },
  },
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@mycompany/design-system'] = path.resolve(
      __dirname,
      '../../src/'
    )

    return config
  },
}
