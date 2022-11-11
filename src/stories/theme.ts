import { PaletteColor as MuiPaletteColor, SimplePaletteColorOptions } from "@mui/material/styles/createPalette"
import "@fontsource/plus-jakarta-sans"
declare module "@mui/material/styles" {
  interface PaletteColor extends MuiPaletteColor {
    contrast: string
  }

  interface PaletteColorOptions extends SimplePaletteColorOptions {
    contrast?: string
  }
}

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    text: {
      primary: "#1b1b1b"
    },
    primary: {
      main: "#21B6A8",
      dark: "#3D8479",
      contrast: "#ffffff"
    },
    grey: {
      200: "#efefef"
    }
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.17px"
    }
  }
})

export default theme
