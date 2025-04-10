import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.js', format: 'esm', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      sourceMap: true,
    }),
    postcss({
      extract: 'index.css', // Outputs to dist/index.css
      minimize: true, // Minifies CSS
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};