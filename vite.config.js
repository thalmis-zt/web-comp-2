import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      name: "WebComponentLib",
      entry: "src/main.js", //import svelte components
      formats: ["iife"], //immediately invoked function
      fileName: "wcl", //will generate /dist/wcl.iife.js
    },
  },
});
