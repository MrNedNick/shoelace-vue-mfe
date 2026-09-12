import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  // The lib build ships straight to a plain <script type="module"> host with
  // no bundler, so `process.env.NODE_ENV` (referenced by Vue's runtime) must
  // be inlined at build time or the widget throws `process is not defined`.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'ShoelaceVueMfe',
      fileName: () => 'shoelace-vue-mfe.js',
      formats: ['es']
    }
  },
  test: {
    environment: 'jsdom'
  }
})
