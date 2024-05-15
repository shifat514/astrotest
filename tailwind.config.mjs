/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background:'#C5DEF2',
				primary: '#8da8a4',
				accent:'#A6EC61',
			},
			fontFamily: {
				spacemono: ['spacemono'],
				spacemono_bold: ['spacemono_bold'],
				fredoka: ['fredoka']
			},
		},
	},
	plugins: [],
}
