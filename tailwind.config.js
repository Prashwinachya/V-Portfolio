/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        warm: {
          bg: '#faf9f6',
          soft: '#f4f2ee',
          card: '#ffffff',
          border: '#e8e5df',
        },
        lavender: {
          50: '#faf8ff',
          100: '#f3eefe',
          200: '#e8ddfd',
          300: '#d7c4fb',
          400: '#bd9df7',
          500: '#9f6ff1',
          600: '#8347e5',
          700: '#6f33cd',
        },
        blush: {
          50: '#fdf4f8',
          100: '#fbe8f2',
          200: '#f7d0e6',
          500: '#ec4899',
        },
        brand: {
          purple: '#7c3aed',
          violet: '#8b5cf6',
          deep: '#12111d',
          darkCard: '#1a1829',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in-left': 'fadeInLeft 0.6s ease-out both',
        'fade-in-right': 'fadeInRight 0.6s ease-out both',
        'bounce-slow': 'bounce 2.5s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.7', transform: 'scale(1.02)' },
        }
      },
    },
  },
  plugins: [],
}
