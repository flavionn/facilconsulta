import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'

const config = defineConfig({
	plugins: [
		Vue(),
		Pages(),
		Layouts(),
		Components({
			directoryAsNamespace: true
		}),
		Icons(),
		WindiCSS()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})

export default config
