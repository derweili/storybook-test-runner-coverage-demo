<p align="center">
  <h1 align="center">Test Coverage Demo for storybook test-runner Issue #148</h1>
  https://github.com/storybookjs/test-runner/issues/148#issuecomment-1186507400
</p>

## Prerequisites

**NodeJS**

Install NodeJS `^16.13.0`

**Yarn**

Install yarn globally
`npm i -g yarn`

**GitHub Package Registry**

Login to GPR: https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages

## Setup

Install the dependencies

```
yarn
```

Run `prepare` hook manually as yarn@2 is not supporting lifetime hooks of npm
Run your local storybook

```
yarn start
```

## Create Test Coverage Reports

```
yarn run coverage
```

To be able to run tests, storybook `yarn start` must be run in a separate terminal window.

This runs jest unit tests and storybook test runner tests.
The test-runner coverage json file is then converted into lcov format.

Tests coverage results merged.

### Coverage results

Jest Unit tests are saved to `./coverage/unit/`

Storybook test runner coverage results are saved to `./coverage/storybook`

Merged test resulst are saved to `./coverage/merged`

## Info to validate errors mentioned in Merge results coverage ticket https://github.com/storybookjs/test-runner/issues/148#issuecomment-1186507400

1.  run `yarn run coverage`
2.  Open `./coverage/unit/lcov-report/src/Navigation/NavigationRoot.ts.html`
3.  Open `./coverage/storybook/lcov-report/src/Navigation/NavigationRoot.ts.html`
4.  Compare file coverage and the number of total lines listed in both tests
