import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		svgr(),
		react(),
		crx({ manifest: manifest as unknown as ManifestV3Export }),
	],
});
