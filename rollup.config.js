import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';



export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-icons': 'ReactIcons'
      }
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-icons': 'ReactIcons'
      }
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs({
      include: /node_modules/,
      transformMixedEsModules: true
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    scss({
      output: 'dist/styles.css',
      outputStyle: 'compressed',
    }),


  ],
  external: ['react', 'react-dom', 'react-icons'],
};
