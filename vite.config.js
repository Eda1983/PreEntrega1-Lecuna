import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/eda1983/preentrega1-lecuna/',
  plugins: [react()],
});
