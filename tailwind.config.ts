import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: { '2xl': '1rem' },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
export default config;
