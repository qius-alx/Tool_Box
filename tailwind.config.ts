import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta base
        'primary-blue': '#007BFF',
        'bright-cyan': '#00FFFF',
        'tech-yellow': '#FFD700',
        'success-green': '#00C853',
        'metal-gray': '#2E2E2E',
        'deep-violet': '#8E44AD',
        'tech-red': '#DC2626',
        'turquoise-blue': '#40E0D0',

        // Colores de UI
        'background-dark': '#0F172A',
        'text-light': '#F8F9FA',
        'text-dark': '#E5E7EB',
        'border-light': '#4A5568',
        'border-dark': '#2D3748',

        // Colores temáticos por área
        'prog-main': '#007BFF', 'prog-accent': '#FFD700',
        'iot-main': '#00C853', 'iot-accent': '#40E0D0',
        'robotics-main': '#2E2E2E', 'robotics-accent': '#DC2626',
        'ai-main': '#8E44AD', 'ai-accent': '#00FFFF',
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;