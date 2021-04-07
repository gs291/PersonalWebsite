import siteColors from "./siteColors";

export const fontFamily = [
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(', ');

export const randomColor = () => siteColors.background.splash[Math.floor(Math.random() * siteColors.background.splash.length)];
