import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { VitePluginFonts } from 'vite-plugin-fonts';
import Components from 'unplugin-vue-components/vite';

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
		Components()
	],
	resolve: {
		alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
	}
});