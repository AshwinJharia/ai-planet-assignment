import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), 'VITE_');

// console.log('VITE_BACKEND:', env.VITE_BACKEND)  // Log for debugging

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: env.VITE_BACKEND || 'http://localhost:5000', // Fallback
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
