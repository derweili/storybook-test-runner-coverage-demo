<p align="center">
  <h1 align="center">Design System</h1>
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

Checkout the repository

```
git clone git@github.com:mycompany/design-system.git
```

Install the dependencies

```
cd design-system && yarn
```

Run `prepare` hook manually as yarn@2 is not supporting lifetime hooks of npm

```
yarn prepare
```

Run your local storybook

```
yarn start
```
