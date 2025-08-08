import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Portfolio-GuilhermeAlmeida'; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, 
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})