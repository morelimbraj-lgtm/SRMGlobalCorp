import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCFCFB', // Pearl / Alabaster
        primary: '#111111',    // Rich Black
        secondary: '#6E6D6B',  // Muted Stone
        accent: '#8C6B4A',     // Cashmere / Muted Bronze
        neutral: {
          100: '#F5F4F0', // Card background
          200: '#EAE8E3', // Subtle borders
        },
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      fontSize: {
        'xs': ['12px', '1.6'],
        'sm': ['14px', '1.6'],
        'base': ['16px', '1.4'],
        'lg': ['20px', '1.4'],
        'xl': ['24px', '1.2'],
        '2xl': ['32px', '1.2'],
        '3xl': ['48px', '1.1'],
        '4xl': ['64px', '1.1'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
       maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
