/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide': 'slide 8s ease-in-out infinite',
        'testimonialSlide': 'testimonialSlide 15s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%, 45%': { transform: 'translateX(0%)' },
          '55%, 100%': { transform: 'translateX(-100%)' },
        },
        testimonialSlide: {
          '0%, 18%': { transform: 'translateX(0%)' },
          '20%, 38%': { transform: 'translateX(-100%)' },
          '40%, 58%': { transform: 'translateX(-200%)' },
          '60%, 78%': { transform: 'translateX(-300%)' },
          '80%, 98%': { transform: 'translateX(-400%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        indicatorPulse: {
          '0%, 18%': { opacity: '1', backgroundColor: '#22c55e' },
          '20%, 100%': { opacity: '0.5', backgroundColor: '#ffffff' },
        },
      }
    },
  },
  plugins: [],
};