
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				forest: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
					950: '#022c22',
				},
				earth: {
					50: '#fdf8ed',
					100: '#f7e8c8',
					200: '#efd6a3',
					300: '#e3bd72',
					400: '#d9a44e',
					500: '#c68c35',
					600: '#a8702a',
					700: '#865625',
					800: '#704624',
					900: '#603b22',
					950: '#351e12',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'cursor-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5', transform: 'scale(0.95)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'cursor-blink': 'cursor-blink 1.5s infinite'
			},
			fontFamily: {
				'indigenous': ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'forest-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDYwIDkwIj48ZyBmaWxsPSIjMDU0RjMxIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiA0LjRjMi43IDQuMiA1LjUgOC40IDUuNSAxMy0uMSA0LjctMyA5LjEtNi43IDExLjctMy43IDIuNS04LjQgMy41LTEzLjMgMi40LTUuMS0xLjEtOS43LTQuMS0xMy05LjItMy4zLTUuMi01LjUtMTIuMS0yLjgtMTcuOCAyLjYtNS42IDEwLjktOS45IDE3LjMtOS41IDYuNi40IDEwLjMgNS4xIDEzIDkuNHoiLz48cGF0aCBkPSJNNTAuOSA0Mi45YzQuMSAxMS42IDguMyAyMy4yLTEuNCAzMi40LTkuNyA5LjMtMzMuMiAxNi4yLTQ1LjcuMkMtOC44IDU5LjUtOS40IDIwLjEgNy41IDkuMiAyNC41LTEuOCA1OS4yIDE1LjIgNTAuOSA0Mi45eiIvPjwvZz48L3N2Zz4=')",
				'indigenous-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjMTA3MDQwIiBmaWxsLW9wYWNpdHk9IjAuMDgiPjxwYXRoIGQ9Ik0zMCAzMCBMMTUgNDUgTDQ1IDQ1IFoiLz48cGF0aCBkPSJNMzAgMzAgTDQ1IDE1IEwxNSAxNSBaIi8+PHBhdGggZD0iTTEwIDEwIEwyMCAyMCBMMjAgMTAgWiIvPjxwYXRoIGQ9Ik01MCA1MCBMNDAgNDAgTDQwIDUwIFoiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNTAiIHI9IjQiLz48Y2lyY2xlIGN4PSI1NCIgY3k9IjEwIiByPSI0Ii8+PC9nPjwvc3ZnPg==')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
