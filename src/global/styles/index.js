import { createTheme } from "@mui/material/styles";

const theme = {
  colors: {
    primary: "#5636D3",
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

const projectTheme = createTheme({
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
  },
  ...theme,
});

export default projectTheme;
