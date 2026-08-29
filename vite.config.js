import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({ customElement: true })],
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
