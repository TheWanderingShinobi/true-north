import defaultTheme from 'tailwindcss/defaultTheme'
const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('daisyui'),
		addDynamicIconSelectors(),
		require('@tailwindcss/typography'),
		require('daisyui')
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#29395a',
					secondary: '#d6a319',
					accent: '#ffeeca',
					neutral: '#877555',
					'base-100': '#ffffff'
				}
			}
		]
	}
}
