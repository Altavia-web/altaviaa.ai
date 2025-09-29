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
        // Alta Via Applications Primary Colors
        darkBlue: {
          DEFAULT: '#002e64',
          40: '#002e6466', // 40% opacity
          70: '#002e64b3', // 70% opacity
        },
        skyBlue: {
          DEFAULT: '#a8dcf4',
          40: '#a8dcf466', // 40% opacity
          70: '#a8dcf4b3', // 70% opacity
        },
        midBlue: {
          DEFAULT: '#5095cb',
          40: '#5095cb66', // 40% opacity
          70: '#5095cbb3', // 70% opacity
        },
        iceBlue: {
          DEFAULT: '#eaf3f9',
          40: '#eaf3f966', // 40% opacity
          70: '#eaf3f9b3', // 70% opacity
        },

        // Secondary Colors
        orange: {
          DEFAULT: '#f7a600',
        },
        sunnyYellow: {
          DEFAULT: '#ffd700',
        },

        // Product Colors - DATEV
        datev: {
          primary: '#009b87',
          secondary: '#78dc3c',
        },

        // Product Colors - Reisekosten
        reisekosten: {
          primary: '#7bcfc9',
          secondary: '#d6ffff',
        },

        // Product Colors - Mahnwesen
        mahnwesen: {
          primary: '#980000',
          secondary: '#ff4100',
        },

        // Product Colors - PeakShip
        peakship: {
          primary: '#ffba00',
          secondary: '#ffebc5',
        },

        // Product Colors - Lokalisierung
        lokalisierung: {
          primary: '#003399',
          secondary: '#00bfbf',
        },

        // Product Colors - Abwesenheit
        abwesenheit: {
          primary: '#00789e',
          secondary: '#65ffe8',
        },

        // Product Colors - GSheet
        gsheet: {
          primary: '#005f32',
          secondary: '#00b577',
        },

        // Legacy primary colors for backward compatibility
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
      },
      backgroundImage: {
        // Radial Gradients
        'gradient-dark-to-mid': 'radial-gradient(50% 50% at 50% 50%, #5095cb 0%, #002e64 100%)',
        'gradient-mid-to-sky': 'radial-gradient(50% 50% at 50% 50%, #a8dcf4 0%, #5095cb 100%)',
        'gradient-sky-to-ice': 'radial-gradient(50% 50% at 50% 50%, #eaf3f9 0%, #a8dcf4 100%)',
        'gradient-orange-to-yellow': 'radial-gradient(50% 50% at 50% 50%, #ffd700 0%, #f7a600 100%)',
      }
    },
  },
  plugins: [],
};

export default config;