import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: "var(--card)",
          banner: "var(--banner-color)"
        },
        text: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--primary)",
          charcoal: "var(--charcoal)",
        },
        rating: {
          DEFAULT: "var(--rating-color)",
        }
      },
    },
  },
  plugins: [],
};

export default config;
