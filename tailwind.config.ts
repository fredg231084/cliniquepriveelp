import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Clinique Privée brand palette
        navy: {
          50: '#f0f3f9',
          100: '#dce3f0',
          200: '#b8c7e1',
          300: '#8da5cc',
          400: '#6583b5',
          500: '#4a6a9e',
          600: '#3a5480',
          700: '#2d4163',
          800: '#1a2744', // Primary navy
          900: '#0f1a2e',
          950: '#090f1a',
        },
        gold: {
          50: '#fdf9f0',
          100: '#faf0d9',
          200: '#f4deb0',
          300: '#edc97e',
          400: '#c9a96b', // Primary gold
          500: '#b8944f',
          600: '#9e7a3a',
          700: '#7d5f2d',
          800: '#5c4421',
          900: '#3d2d16',
        },
        cream: {
          50: '#fafbfd',
          100: '#f5f7fa', // Soft background
          200: '#eef1f6',
          300: '#e4e8ef',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-outfit)',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        display: [
          'var(--font-outfit)',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(26, 39, 68, 0.06), 0 8px 24px rgba(26, 39, 68, 0.05)',
        'card-hover': '0 2px 8px rgba(26, 39, 68, 0.08), 0 12px 32px rgba(26, 39, 68, 0.08)',
        'form': '0 4px 16px rgba(26, 39, 68, 0.08), 0 16px 48px rgba(26, 39, 68, 0.06)',
        'sticky': '0 -2px 16px rgba(26, 39, 68, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
