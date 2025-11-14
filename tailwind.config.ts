import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./public/*",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'project1': "url('/project-1.png')",
        'project2': "url('/public/project-2.png')",
        'project3': "url('/public/project-3.png')",
        'project4': "url('/public/project-4.png')",
        'project5': "url('/public/project-5.png')",
        'project6': "url('/public/project-6.png')",
      },
      fontFamily: {
        fraunces: ['Fraunces', "serif"],
        playfair: ['Radio_Canada', "sans-serif"]
      }
    },
    colors: {
      light: '#FDF5E6',
      dark: '#2A1A1F',
      maroon: '#642F37',
      red: '#C0350F',
      orange: '#F3904B',
      yellow: '#F7C767',
      purple: '#B89DBB',
    },
  },
};

export default config;
