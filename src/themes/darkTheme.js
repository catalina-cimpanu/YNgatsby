import colorPalette from "./colorPalette";
import "@fontsource/halant";
import "@fontsource/maven-pro";

export default {
  fonts: {
    // primary: "Roboto Slab, serif",
    // secondary: "Source Sans Pro, sans-serif",
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

    bg: colorPalette.bg,
    sectionBg: colorPalette.bg1,
    sectionBg2: colorPalette.bg2,
    transparentBg: colorPalette.colorSecondarytransparent,
    surface1: colorPalette.bg1,
    surface2: colorPalette.bg2,
    surface3: colorPalette.bg3,
    surface4: colorPalette.bg4,
    surface5: colorPalette.bg5,
    surface6: colorPalette.bg6,

    shadowColor: colorPalette.SGrey6,

    H1H2: colorPalette.PBlue5,
    H3toH6: colorPalette.PBlue3,
    p: colorPalette.SGrey2,
    onDark: colorPalette.PBlue1,
    tag: colorPalette.SGrey9,
    selectionBg: colorPalette.PBlue3,
    selectionText: colorPalette.colorSecondary500,
    scrollbar: colorPalette.PBlue4,
    scrollbarHover: colorPalette.PBlue5,

    roundButtonBg: colorPalette.PBlue5,
    buttonTextPrimary: colorPalette.colorSecondary500,
    buttonTextSecondary: colorPalette.PBlue3,
    buttonTextonDark: "#FFFFFF",
    buttonTextonLight: colorPalette.colorSecondary500,
    buttonGradient: {
      gradient: "linear-gradient(270deg, #85DCF3 0%, #E2F7FC 100%)",
      gradientWebkit:
        "-webkit-gradient(linear, right top, left top, from(#85DCF3), to(#E2F7FC))",
      gradientO: "-o-linear-gradient(right, #85DCF3 0%, #E2F7FC 100%)",
    },

    aText: colorPalette.PBlue2,
    // aTextHovered: colorPalette.colorSecondary900,
    // aTextActive: colorPalette.colorSecondary900,
    aBg: colorPalette.PBlue2,
    aUnderline: colorPalette.PBlue5,
    aHoverBg: colorPalette.PBlue3,
    AHoverUnderline: colorPalette.PBlue7,
    aActiveBg: colorPalette.PBlue5,
    aActiveUnderline: colorPalette.PBlue7,

    navLinkText: colorPalette.PBlue1,

    miniFeatureBG: colorPalette.PBlue2,

    logoBG: colorPalette.SGrey2,
    externalLink: colorPalette.PBlue3,
    separator: colorPalette.bg3,
  },
};
