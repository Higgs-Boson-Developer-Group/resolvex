/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3490DC",
				secondary: "#E74C3C",
				success: "#2ECC71",
				warning: "#F1C40F",
				danger: "red",
				info: "#34495E",
				light: "#F1C40F",
				dark: "#2C3E50",
			},
		},
	},
	plugins: [],
};
