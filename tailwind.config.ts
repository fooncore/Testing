/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f-dark': '#0A0F1E',
        'f-dark-2': '#0D1526',
        'f-slate': '#1A2035',
        'f-slate-light': '#232B45',
        'f-cyan': '#00D4D4',
        'f-cyan-dark': '#00B8B8',
        'f-text': '#E8F0F8',
        'f-text-muted': '#B4C8D8',
        'f-text-dim': '#8BA3B8',
        'f-border': '#2A3350',
        'f-footer': '#080F1A',
      },
      fontFamily: {
        'sans': ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        'display': ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 212, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 212, 0.3)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}