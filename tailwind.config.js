/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: "w-full my-32 lg:px-72 px-2",
    extend: {
      colors: {
        'main': '#FDCA09',
        'lightblack': '#101010',
        'metrics': '#FFC00E',
        'lightgray': '#10101080',
        'input': '#10101095'
      },
    },
  },
  corePlugins: {
   container: false,
  },
  plugins: [],
};
