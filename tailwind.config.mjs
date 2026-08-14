/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0b0d',
          900: '#111318',
          800: '#181b21',
          700: '#22262e',
          600: '#2e333d',
          // 500/400 tuned to pass WCAG AA (4.5:1) against ink-950 —
          // do not darken these without re-checking contrast.
          500: '#838b98',
          400: '#8f97a3',
          300: '#9aa1ac',
          200: '#c4c9d1',
          100: '#e6e8ec',
          50: '#f5f6f8',
        },
        // Flutter-blue accent, a deliberate nod to the platform this
        // portfolio is about, not a generic teal.
        signal: {
          DEFAULT: '#38bdf8',
          dim: '#0ea5e9',
          bright: '#7dd3fc',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '76rem',
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 13s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-16px, 18px) scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
