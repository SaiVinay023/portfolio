import type { Config } from 'tailwindcss'
export default {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/pages/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: { extend: { container: { center: true, padding: '1rem' } } },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')]
} satisfies Config
