import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{//making proxy for our local server
      '/api':'http://localhost:3000'
      //server will think that the request is from same url(hence allow it)
    },
  },
  plugins: [react()],
})
