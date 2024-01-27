import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  server: {
    port: 5000,
  },
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
          buttonRemote: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ['vue']
  })
  ],
})
