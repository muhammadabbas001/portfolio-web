import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites: https://<user>.github.io/<repo>/
// CI sets VITE_BASE_PATH; local `npm run build` falls back to /portfolio-web/.
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, ".", "");
  const pagesBase = env.VITE_BASE_PATH || "/portfolio-web/";
  return {
    base: command === "build" ? pagesBase : "/",
    plugins: [react()],
    // One gsap instance only (avoids odd plugin behavior if deps resolve two copies).
    resolve: { dedupe: ["gsap"] },
  };
});
