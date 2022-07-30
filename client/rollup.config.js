import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dest',
    format: 'cjs',
  },
  plugins: [typescript()],
};