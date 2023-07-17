import colorPalette from "./colorPalette";
// import "@fontsource/raleway"
// import "@fontsource/pt-sans"
// import "@fontsource/merriweather"
// import "@fontsource/bitter"
// import "@fontsource/cabin"
// import "@fontsource/source-sans-pro"
// import "@fontsource/roboto-slab"
// import "@fontsource/karla"
// import "@fontsource/rubik"
// import "@fontsource/asap"
// import "@fontsource/roboto"
// import "@fontsource/oxygen"
// import "@fontsource/nunito"
// import "@fontsource/spectral"
// import "@fontsource/lora"
// import "@fontsource/libre-baskerville"
// import "@fontsource/esteban"
import "@fontsource/maven-pro";
import "@fontsource/halant";

export default {
  fonts: {
    primary: "Maven Pro",
    secondary: "Halant",
  },
  spacing: "0.05rem",
  radiusL: "50px",
  radiusS: "8px",
  radiusXS: "4px",
  transition: "all 0.1s linear",
  maxWidth: "1170px",
  shadows: {
    smallShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    bigShadow: "0 10px 10px rgba(0, 0, 0, 0.25)",
    shadowL:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    shadowXL:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    shadowCard: "0px 5px 25px 0px rgba(0, 0, 0, 0.2)",
    shadowTab: "0px 5px 35px 0px rgba(0, 0, 0, 0.3)",
    neumorphic: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
    linkShadow:
      "inset 0 -7px 9px -7px #7cf0f8, 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  elevations: {
    elevation0: "none",
    elevation1:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    elevation2:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    elevation3:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
    elevation4:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    elevation5:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
    elevation6:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    elevation7:
      "0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)",
    elevation8:
      "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    elevation9:
      "0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12)",
    elevation10:
      "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
  },

  colors: {
    primary: colorPalette.colorPrimary500,
    primaryLight: colorPalette.colorPrimary200,
    primaryDark: colorPalette.colorPrimary700,

    secondary: colorPalette.colorSecondary500,
    secondaryLight: colorPalette.colorSecondary200,
    secondaryDark: colorPalette.colorSecondary700,

    danger: colorPalette.colorDanger500,
    dangerLight: colorPalette.colorDanger200,
    dangerDark: colorPalette.colorDanger700,

    warning: colorPalette.colorWarning500,
    warningLight: colorPalette.colorWarning200,
    warningDark: colorPalette.colorWarning700,

    success: colorPalette.colorSuccess500,
    successLight: colorPalette.colorSuccess200,
    successDark: colorPalette.colorSuccess700,

    info: colorPalette.colorInfo500,
    infoLight: colorPalette.colorInfo200,
    infoDark: colorPalette.colorInfo700,

    onPrimary: colorPalette.colorSecondary500,
    onSecondary: "#ffffff",
    onBackground: colorPalette.colorSecondary500,
    onSurface: colorPalette.colorSecondary500,
    onDanger: colorPalette.colorSecondary500,
    onWarning: colorPalette.colorSecondary500,
    onSuccess: colorPalette.colorSecondary500,
    onInfo: colorPalette.colorSecondary500,

    bg: "#FFFFFF",
    sectionBg: colorPalette.PBlue1,
    transparentBg: colorPalette.colorSecondarytransparent,
    surface1: "#FFFFFF",
    surface2: "#FFFFFF",
    surface3: "#FFFFFF",
    surface4: "#FFFFFF",
    surface5: "#FFFFFF",
    surface6: "#FFFFFF",

    shadowColor: colorPalette.SGrey9,

    H1H2: colorPalette.colorPrimary500,
    H3toH6: colorPalette.colorSecondary500,
    p: colorPalette.colorSecondary500,
    tag: colorPalette.PBlue2,
    onDark: colorPalette.PBlue1,
    selectionBg: colorPalette.colorPrimary100,
    selectionText: colorPalette.colorSecondary500,
    scrollbar: colorPalette.PBlue2,
    scrollbarHover: colorPalette.PBlue4,

    roundButtonBg: colorPalette.colorPrimary500,
    buttonTextPrimary: colorPalette.PBlue1,
    buttonTextSecondary: colorPalette.colorSecondary500,
    buttonTextonDark: colorPalette.PBlue1,
    buttonTextonLight: colorPalette.colorSecondary500,
    buttonGradient: {
      gradient: "linear-gradient(90deg, #28c1ea -22.5%, #0096d6 122.5%)",
      gradientWebkit:
        "-webkit-gradient(linear, left top, right top, color-stop(-22.5%, #28c1ea), color-stop(122.5%, #0096d6))",
      gradientO: "-o-linear-gradient(left, #28c1ea -22.5%, #0096d6 122.5%)",
    },

    aText: colorPalette.colorSecondary500,
    // aTextHovered: colorPalette.colorSecondary900,
    // aTextActive: colorPalette.colorSecondary900,
    aBg: colorPalette.colorPrimary100,
    aUnderline: colorPalette.colorPrimary300,
    aHoverBg: colorPalette.colorPrimary300,
    AHoverUnderline: colorPalette.colorPrimary400,
    aActiveBg: colorPalette.colorPrimary300,
    aActiveUnderline: colorPalette.colorPrimary400,

    navLinkText: colorPalette.colorSecondary500,

    miniFeatureBG: "#FFFFFF",

    logoBG: "#FFFFFF",
    externalLink: colorPalette.SGrey7,
    separator: colorPalette.SGrey2,
  },
};
