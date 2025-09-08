import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	theme: {
		extend: {
			backgroundImage: {
				"hero-home": "url('/img/home.png')",
			},

			keyframes: {
				appear: {
					from: {
						opacity: "0",
					},
					to: {
						opacity: "1",
					},
				},
				slide: {
					from: {
						transform: "translateX(100%)",
					},
					to: {
						transform: "translateX(0%)",
					},
				},
			},
			animation: {
				appear: "appear 1s ease-in-out",
				slide: "slide 750ms ease-in-out",
			},
		},
	},
};

export default config;
