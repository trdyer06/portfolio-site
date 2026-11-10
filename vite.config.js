import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// add:  base: "/<repo>/"
export default defineConfig({
  plugins: [react()],
  base: "https://trdyer06.github.io/portfolio-site/",
});