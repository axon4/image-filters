import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { VitePluginFonts } from 'vite-plugin-fonts';
import Components from 'unplugin-vue-components/vite';
import WASM from 'vite-plugin-wasm'; 'vite-plugin-wasm';
import TopLevelAWait from 'vite-plugin-top-level-await';

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
		}),
		Components(),
		WASM(),
		TopLevelAWait()
	],
	base: '/image-filters/',
	optimizeDeps: {
		exclude: ['@silvia-odwyer/photon']
	},
	resolve: {
		alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
	}
});