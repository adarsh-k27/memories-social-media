module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], ///*.{html,js}
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        219: "219px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        30: "30px",
        80: "80px",
        150: "150px",
        219: "219px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        480: "480px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh"
      },
      minWidth: {
        210: "210px",
        300: "300px",
        310: "310px",
        350: "350px",
        620: "620px",
      },
      colors: {
        sidebarColor: "#242730",
        darkBgColor: "#010300",
        lightBgColor: "#F8EBE4",
        lightSideBar: "#EAD9CA",
        boxColor: "#EAD9C9",
        image: "rgba(256,256,256,0.4)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "2xl": "1536px"
      },
      // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '976px',
      //   xl: '1440px',
      // },
      padding: {
        2: "2rem",
        2.5: "2.5rem",
        3: "3rem",
        3.5: "3.5rem",
        5: "5rem",
        6: "6rem",
        6.5: "6.5rem",
        7: "7rem"
      },

    },
  },
  plugins: [],
}