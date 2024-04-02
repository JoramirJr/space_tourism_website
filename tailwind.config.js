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
        'crew-mobile': "url('assets/crew/background-crew-mobile.jpg')",
        'technology-mobile': "url('assets/technology/background-technology-mobile.jpg')",
        'home-desktop': "url('assets/home/background-home-desktop.jpg')",
        'destination-desktop': "url('assets/destination/background-destination-desktop.jpg')",
        'crew-desktop': "url('assets/crew/background-crew-desktop.jpg')",
        'technology-desktop': "url('assets/technology/background-technology-desktop.jpg')",
      },
      padding: {
        "default-mobile": "20px",
        "default-desktop": "40px",
      }
    },
  },
  plugins: [],
}