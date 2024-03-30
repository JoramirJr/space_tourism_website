/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      'Bellefair-Regular': ["Bellefair", "serif"],
      'Barlow-Condensed-Regular': ["Barlow Condensed", "sans-serif"],

    },
    extend: {
      backgroundImage: {
        'home-mobile': "url('assets/home/background-home-mobile.jpg')",
        'destination-mobile': "url('assets/destination/background-destination-mobile.jpg')",

      },
      padding: {
        "default-mobile": "20px",
      }
    },
  },
  plugins: [],
}