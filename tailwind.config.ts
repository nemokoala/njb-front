import type { Config } from 'tailwindcss';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        pretendard: 'var(--font-pretendard)',
      },
      animation: {
        'progress-bar': 'progress-bar 1s linear infinite',
        'grow-width': 'growWidth 1s forwards',
      },
      keyframes: {
        'progress-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        growWidth: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
} satisfies Config;
