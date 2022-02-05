import {useSelector} from 'react-redux';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';


import Page from './Page';
import {getDarkMode} from '../../lib/redux/selectors';
import {themeOptionsDark, themeOptionsLight} from '../../lib/utils/theme';

export default function AppContainer({Component, pageProps}) {
    const darkMode = useSelector(getDarkMode);
    
    return (
        <>
            <ThemeProvider theme={darkMode ? themeOptionsDark : themeOptionsLight}>
                <CssBaseline />
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ThemeProvider>
        </>
    );
}