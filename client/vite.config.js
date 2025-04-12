import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  build: {
    outDir: 'dist',  // Vercel will serve this folder as static content
  },
  server: {
    historyApiFallback: true
  }
})
