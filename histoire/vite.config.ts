import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// @TODO investigate ESM errors when this is imported in vite.config.ts
// https://github.com/vitejs/vite/issues/7981
//import { HstScreenshot } from '@histoire/plugin-screenshot'
const pathSrc = path.resolve(__dirname, "../components/style");

export default defineConfig({
  plugins: [vue()],

  histoire: {
    // plugins: [
    //   HstScreenshot(),
    // ],

    // Alternative way of specifying histoire config
    setupFile: "/src/histoire.setup.ts",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "${pathSrc}/variables";
        @import "${pathSrc}/mixins";
        `,
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
