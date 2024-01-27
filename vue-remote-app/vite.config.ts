import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VitePluginFederation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  plugins: [
    vue(),
    VitePluginFederation(
      {
        name: 'remote-app',
        filename: 'remoteEntry.js',
        exposes: {
          './components/RemoteButton': './src/components/RemoteButton.vue',
        }
      }
    )
  ],
})
