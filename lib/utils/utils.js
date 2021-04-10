import siteColors from "./siteColors";

export const fontFamily = [
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ].join(', ');

export const randomColor = (darkMode) => {
    if (darkMode){
        return siteColors.background.splash.dark[Math.floor(Math.random() * siteColors.background.splash.dark.length)];
    }
    return siteColors.background.splash.light[Math.floor(Math.random() * siteColors.background.splash.light.length)];
}
