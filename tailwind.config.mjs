/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background:'#c1ebc0',
				primary: '#396837',
				secondary:'#98b796',
				// accent:'',
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
