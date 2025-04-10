import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss'; // Use import instead of require
import autoprefixer from 'autoprefixer';

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
      extract: 'index.css',
      minimize: true,
      plugins: [
        tailwindcss(), // Use the imported tailwindcss directly
        autoprefixer(),
      ],
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};