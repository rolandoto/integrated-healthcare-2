import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f8f6',
          100: '#cff2ed',
          200: '#a0e5d9',
          300: '#6dd7c4',
          400: '#35c8ae',
          500: '#00b89c',
          600: '#009b84',
          700: '#007d6c',
          800: '#0a5f53',
          900: '#0b4a41',
        },
        accent: {
          50: '#eaf8fb',
          100: '#d5f0f7',
          200: '#aae0ef',
          300: '#7fcfe7',
          400: '#4ab9dc',
          500: '#0f9fcf',
          600: '#0d84ac',
          700: '#0a6989',
          800: '#084e66',
          900: '#053343',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
