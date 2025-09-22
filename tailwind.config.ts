import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-titillium)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        titillium: ['var(--font-titillium)', 'sans-serif'],
      },
      fontSize: {
        // Base font size: 18px (1.125rem), scale factor: 1.125
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.4' }],     // 14px
        'base': ['1.125rem', { lineHeight: '1.4' }],   // 18px (base)
        'lg': ['1.266rem', { lineHeight: '1.4' }],     // ~20.3px
        'xl': ['1.424rem', { lineHeight: '1.3' }],     // ~22.8px
        '2xl': ['1.602rem', { lineHeight: '1.3' }],    // ~25.6px
        '3xl': ['1.802rem', { lineHeight: '1.2' }],    // ~28.8px
        '4xl': ['2.027rem', { lineHeight: '1.2' }],    // ~32.4px
        '5xl': ['2.281rem', { lineHeight: '1.1' }],    // ~36.5px
        '6xl': ['2.566rem', { lineHeight: '1.1' }],    // ~41.1px

        // Responsive headings (desktop/mobile)
        'h1-desktop': ['2.566rem', { lineHeight: '1.1', fontWeight: '700' }], // ~41.1px
        'h1-mobile': ['2.027rem', { lineHeight: '1.2', fontWeight: '700' }],  // ~32.4px
        'h2-desktop': ['2.281rem', { lineHeight: '1.1', fontWeight: '600' }], // ~36.5px
        'h2-mobile': ['1.802rem', { lineHeight: '1.2', fontWeight: '600' }],  // ~28.8px
        'h3-desktop': ['1.802rem', { lineHeight: '1.2', fontWeight: '600' }], // ~28.8px
        'h3-mobile': ['1.602rem', { lineHeight: '1.3', fontWeight: '600' }],  // ~25.6px
        'h4-desktop': ['1.602rem', { lineHeight: '1.3', fontWeight: '600' }], // ~25.6px
        'h4-mobile': ['1.424rem', { lineHeight: '1.3', fontWeight: '600' }],  // ~22.8px
        'h5-desktop': ['1.424rem', { lineHeight: '1.3', fontWeight: '600' }], // ~22.8px
        'h5-mobile': ['1.266rem', { lineHeight: '1.4', fontWeight: '600' }],  // ~20.3px
        'h6-desktop': ['1.266rem', { lineHeight: '1.4', fontWeight: '600' }], // ~20.3px
        'h6-mobile': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],  // 18px
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      }
    },
  },
  plugins: [],
};

export default config;