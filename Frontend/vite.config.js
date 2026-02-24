import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: `/`, 
  build: {
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',

        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})