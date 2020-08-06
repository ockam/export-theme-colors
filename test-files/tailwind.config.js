module.exports = {
  purge: {
    content: [`./templates/**/*.twig`, `./src/js/**/*.js`],
    options: {
      whitelistPatterns: [/nav__link--/],
    },
  },
  theme: {
    colors: {
      transparent: `transparent`,

      black: `#000`,
      'black-50': `rgba(0,0,0,0.50)`,
      white: `#fff`,
      'white-75': `rgba(255,255,255,0.75)`,

      brandColor: `#FA9B28`, // orange.500
      textColor: `#000`,
      linkColor: `#009EF6`,
      hoverColor: `#2A5477`, // blue.500
      errorColor: `#BA442C`, // red.600

      gray: {
        100: `#EFF0F0`,
        200: `#D8D8D9`,
        300: `#C1C1C3`,
        400: `#929395`,
        500: `#636468`, // design
        600: `#595A5E`,
        700: `#3B3C3E`,
        800: `#2D2D2F`,
        900: `#1E1E1F`,
      },
      yellow: {
        100: `#FFF9EA`,
        200: `#FFF1CA`,
        300: `#FFE9AB`,
        400: `#FFD86B`,
        500: `#FFC72C`,
        brand: `#FFC72C`,
        600: `#E6B328`,
        700: `#99771A`,
        800: `#735A14`,
        900: `#4D3C0D`,
      },
      orange: {
        100: `#FFF5EA`,
        200: `#FEE6C9`,
        300: `#FDD7A9`,
        400: `#FCB969`,
        500: `#FA9B28`,
        brand: `#FA9B28`,
        600: `#E18C24`,
        700: `#965D18`,
        800: `#714612`,
        900: `#4B2F0C`,
      },
      red: {
        100: `#FAEDEA`,
        200: `#F3D2CC`,
        300: `#ECB7AD`,
        400: `#DD816F`,
        500: `#CF4B31`,
        brand: `#CF4B31`,
        600: `#BA442C`,
        700: `#7C2D1D`,
        800: `#5D2216`,
        900: `#3E170F`,
      },
      purple: {
        500: `#512C6D`,
        brand: `#512C6D`,
      },
      blue: {
        100: `#EAEEF1`,
        200: `#CAD4DD`,
        300: `#AABBC9`,
        400: `#6A87A0`,
        500: `#2A5477`,
        brand: `#2A5477`,
        600: `#264C6B`,
        700: `#193247`,
        800: `#132636`,
        900: `#0D1924`,
      },
      teal: {
        100: `#E8F6F6`,
        200: `#C6E7E8`,
        300: `#A4D9DA`,
        400: `#60BDBF`,
        500: `#1CA0A3`,
        brand: `#1CA0A3`,
        600: `#199093`,
        700: `#116062`,
        800: `#0D4849`,
        900: `#083031`,
      },
      green: {
        100: `#F3F7EE`,
        200: `#E1EBD4`,
        300: `#CFDFBA`,
        400: `#AAC686`,
        500: `#86AE52`,
        brand: `#86AE52`,
        600: `#799D4A`,
        700: `#506831`,
        800: `#3C4E25`,
        900: `#283419`,
      },
    },
    screens: {
      // usm: { max: "575px" },
      sm: `576px`,
      // umd: { max: "767px" },
      md: `768px`,
      ulg: { max: `1023px` },
      lg: `1024px`,
      // uxl: { max: "1367px" },
      xl: `1368px`,
      print: { raw: `print` },
    },
    fontFamily: {
      sans: [`Barlow`, `Trebuchet MS`, `Helvetica`, `Arial`, `sans-serif`],
      cond: [`Barlow Condensed`, `Arial Narrow`, `sans-serif`],
    },

    extend: {
      boxShadow: {
        center: `0 0 25px -5px rgba(0, 0, 0, 0.2), 0 0 10px -5px rgba(0, 0, 0, 0.4)`,
      },
      fontSize: {
        '3xl': `2rem`,
      },
      lineHeight: {
        title: 1.1,
        '12': `3rem`,
      },
      padding: {
        '16-9': `56.25%`,
      },
      spacing: {
        '7': `1.75rem`,
      },
      maxHeight: {
        half: `50%`,
      },
      maxWidth: {
        '0': `0`,
      },
    },
  },
  variants: {
    maxWidth: [`responsive`, `hover`, `group-hover`],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // function({ addUtilities, config }) {
    //   const font = config(`theme.fontFamily.sans`)
    //   const newUtilities = {
    //     '.display-title': {
    //       fontFamily: font.join(`, `),
    //       fontWeight: 800,
    //       lineHeight: 1,
    //       fontFeatureSettings: `"liga" 0`
    //     }
    //   }
    //   addUtilities(newUtilities)
    // }
  ],
}
