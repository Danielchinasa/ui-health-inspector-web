import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        privacyPolicy: new URL("./privacy-policy/index.html", import.meta.url)
          .pathname,
        termsOfUse: new URL("./terms-of-use/index.html", import.meta.url)
          .pathname,
      },
    },
  },
});
