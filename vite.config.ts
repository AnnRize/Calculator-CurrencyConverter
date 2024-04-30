import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        layout: "/src/layout/",
        pages: "/src/pages/",
      },
    },
    base: mode === "production" ? "/Calculator-CurrencyConverter/" : "/",
  };
});
