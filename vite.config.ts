import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config
export default defineConfig({
	plugins: [
		Vue(),
		VitePluginFonts({
			google: {
				families: [{
					name: 'Quicksand'
				}]
			}
		})
	],
	resolve: {
		alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
	}
});