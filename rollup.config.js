import { createRollupConfigs } from './scripts/base.config.js'
import autoPreprocess from 'svelte-preprocess'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import yaml from '@rollup/plugin-yaml'

const production = !process.env.ROLLUP_WATCH

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: 'dist/build',
  serve: !production,
  production,
  rollupWrapper: cfg => {
    cfg.plugins.push(yaml())
    return cfg
  },
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        scss: {
          includePaths: ['src']
        },
        postcss: {
          plugins: [
            postcssImport(),
            autoprefixer,
            cssnano
          ]
        },
        defaults: { style: 'postcss' }
      })]
  }
}

const configs = createRollupConfigs(config)

export default configs
