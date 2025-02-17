/// <reference types="vitest" />
import vuePlugin from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    environment: 'jsdom',
    alias: {
      '#q-app': path.resolve(__dirname, 'src')
    }
  },
  plugins: [tsconfigPath(), vuePlugin()],
})
