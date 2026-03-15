import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['spark.powerll.fr'],
  },
  preview: {
    allowedHosts: ['spark.powerll.fr'],
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  },
})