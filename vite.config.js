import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Output to docs folder for GitHub Pages
    emptyOutDir: true, // Clear docs folder before each build
  }
})