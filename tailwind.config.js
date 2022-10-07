/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans']
			},
			minHeight: {
				16: '4rem'
			}
		}
	},
	plugins: []
};
