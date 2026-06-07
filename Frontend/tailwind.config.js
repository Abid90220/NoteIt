import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        noteit: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#38bdf8",
          "secondary-content": "#082f49",
          accent: "#0ea5e9",
          "accent-content": "#ffffff",
          neutral: "#172554",
          "neutral-content": "#eff6ff",
          "base-100": "#ffffff",
          "base-200": "#eff6ff",
          "base-300": "#dbeafe",
          "base-content": "#0f172a",
          info: "#0284c7",
          "info-content": "#ffffff",
          success: "#16a34a",
          "success-content": "#ffffff",
          warning: "#f59e0b",
          "warning-content": "#111827",
          error: "#dc2626",
          "error-content": "#ffffff",
        },
      },
    ],
  }
}
