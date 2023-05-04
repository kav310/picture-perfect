/** @type {import('tailwindcss').Config} */

const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      fontFamily: {
        'sofia': ["var(--font-sofia)", ...fontFamily.sans]
      },
			colors: {
				brown: {
					10: "#7F5442",
					20: "#60372C",
					30: "#23201F",
				},
        grey: {
          10: "#F9FAFB",
          20: "#65615C"
        }
      }
    }
	},
	plugins: [],
}
