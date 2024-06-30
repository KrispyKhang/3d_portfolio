import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //  // This is the part that tells Vite to load glb files
  assetsInclude: ["**/*.glb"],
});
