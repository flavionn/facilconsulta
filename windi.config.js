import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
	theme: {
		extend: {
			colors: {
				facilConsulta: {
					primary: '#483698',
					primary0: '#483698',
					secondary0: '#FFFFFF',
					secondary1: '#F9F9F9',
					secondary3: '#B9B9B9',
					secondary4: '#8A8A8A',
					secondary7: '#282828',
					cta1: '#FFE766',
					cta0: '#FBDE40',
					danger: '#DC3545',
				}
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				cursive: ['Comfortaa', 'cursive'],
			}
		}
	}
})