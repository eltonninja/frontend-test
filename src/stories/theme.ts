import { Theme, ThemeOptions } from "@mui/material/styles"
import { createTheme } from "@mui/material/styles"
import "@fontsource/plus-jakarta-sans"

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string
    }
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme
}

const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans",
    body2: {
      color: "#1b1b1b"
    }
  }
})

export default theme
