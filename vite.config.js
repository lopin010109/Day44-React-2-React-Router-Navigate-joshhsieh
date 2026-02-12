import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Day44-React-2-React-Router-Navigate-joshhsieh/' : '/',
  plugins: [react()],
})
