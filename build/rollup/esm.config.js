/* eslint-disable import/no-extraneous-dependencies */
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/esm',
    format: 'es',
  },
  plugins: [json(), typescript()],
}
