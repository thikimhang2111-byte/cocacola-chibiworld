import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cocacola-chibiworld/',
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})
