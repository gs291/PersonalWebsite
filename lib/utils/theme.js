import {createTheme} from "@mui/material";

export const themeOptionsLight = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0052d8',
        },
        secondary: {
            main: '#767473',
        },
        text: {
            primary: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#d0cfcc',
        },
        divider: '#0052d8',
    },
    typography: {
        fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    },
});

export const themeOptionsDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1cdeca',
        },
        secondary: {
            main: '#3A414B',
        },
        background: {
            default: '#1D2025',
            paper: '#3A414B',
        },
        divider: '#243b53',
    },
    typography: {
        fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    },
});