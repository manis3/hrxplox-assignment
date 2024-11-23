import Breadcrumb from "@/components/ui/breadcrumb/breadcrumb";
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
          grayScaleCharcoal: "var(--grayScale-charcoal)",
          proseBody: "var(--tw-prose-body)",
          breadcrumb: "var(--breadcrumb)",
        },
        rating: {
          DEFAULT: "var(--rating-color)",
        },
        border: {
          lightGray: "var(light-gray)"
        }
      },
    },
  },
  plugins: [],
};

export default config;
