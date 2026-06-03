import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        card: '#161616',
        accent: '#b0fe76',
        'accent-hover': '#c8ff96',
        muted: '#bdbdbd',
        faint: '#888888',
        border: '#222222',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Share Tech"', 'sans-serif'],
        secondary: ['Esteban', 'serif'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero-sm': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '0px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1.5s  ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config