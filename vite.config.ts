import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Static service pages are separate HTML entries (no 3D bundle).
      input: {
        main: "index.html",
        aiUgcAds: "services/ai-ugc-ads/index.html",
        performanceVideoAds: "services/performance-video-ads/index.html",
        aiUgcAdsCost: "insights/ai-ugc-ads-cost/index.html",
      },
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-three": ["three", "three-stdlib"],
          "vendor-r3f": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "vendor-physics": [
            "@react-three/rapier",
            "@react-three/cannon",
          ],
          "vendor-gsap": ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
