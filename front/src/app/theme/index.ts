import { createTheme } from "@mui/material";
import { number } from "yup";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#7E33E0",
      light: "#FB2E86",
      contrastText: "#fff",
    },
    secondary: {
      main: "#121316",
      light: "#3F4145",
      contrastText: "#fff",
    },
    success: {
      main: "#FB2E86",
      light: "#FB2E86",
      dark: "#FB2E86",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
