/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowML: '#FFE600',
        blackML: '#333333',
        grayStrongML: '#666666',
        grayLightML: '#999999',
        whiteGrayML: '#EEEEEE',
        blueML: '#3483FA',
      },
    },
  },
  plugins: [],
}