import { defineConfig } from 'vite';
import vitePluginSassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [
    vitePluginSassDts(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/base/colors";
          @import "./src/styles/base/typography";
        `,
      },
    },
  },
});