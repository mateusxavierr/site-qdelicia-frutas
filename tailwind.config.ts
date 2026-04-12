import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        qgreen: {
          50: '#F4F9EE', 100: '#E8F3DE', 200: '#CFE6B6', 300: '#B6D98F',
          400: '#9DCC67', 500: '#85C226', 600: '#6A9B1E', 700: '#507415',
          800: '#354D0F', 900: '#1B2708',
        },
        qpurple: {
          50: '#F6EDFA', 100: '#EEDCF5', 200: '#D4B0EA', 300: '#BA84DF',
          400: '#9F58D4', 500: '#6A1B9A', 600: '#55167B', 700: '#40105C',
          800: '#2A0B3E', 900: '#15051F',
        },
        qneutral: {
          50: '#FFFFFF', 100: '#F9F8F6', 200: '#EBE9E1', 300: '#D6D3CA',
          400: '#A3A097', 500: '#78756C', 600: '#57534E', 700: '#403D39',
          800: '#292524', 900: '#1A1918',
        },
        qearth: {
          ink: '#2c2825',
          muted: '#5c534c',
          mist: '#e8e4db',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
