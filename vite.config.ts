import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), svgr()],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "@shared/styles/global.scss";`,
    //     },
    //   },
    // },

server: {
  proxy: {
    '/api': {
      target: 'http://159.203.173.83:8000/',
      changeOrigin: true,

    },
  },
},

    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@features': path.resolve(__dirname, './src/features'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@shared': path.resolve(__dirname, './src/shared'),
      },
    },
  }

})
