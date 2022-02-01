import { createTheme } from "@mui/material/styles";

export const theme = {
  colors: {
    primary: "#27A683",
    primary_ligth: "#66D2B4",
    primary_dark: "#287D66",
    // primary: "#5EEAC3",
    // primary_ligth: "#A6F5DF",
    // primary_dark: "#15C795",
    // warning: "#EE9900",
    secondary: "#FF872C",
    secondary_light: "#FF872C3A",
    success: "#12A454",
    success_light: "#12A4545A",
    attention: "#E83F5B",
    error: "#E83F5B",
    attention_light: "#E83F5B5A",
    shape: "#FFFFFF",
    title: "#363F5F",
    text: "#969CB2",
    text_dark: "#000000",
    background: "#F0F2F5",
  },
};

export const projectTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
    error: {
      main: theme.colors.error,
    },
  },
  typography: {
    h2: {
      fontFamily: "Roboto",
      fontWeight: 400,
    },
    h1: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 22,
    },
  },
  ...theme,
});

export default projectTheme;
