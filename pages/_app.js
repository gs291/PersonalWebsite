import {Provider} from 'react-redux';
import {CssBaseline} from '@mui/material';
import {Global, css} from '@emotion/react';
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';

import store from '../lib/redux/store';
import Page from '../components/page/Page';
import {themeOptionsDark, themeOptionsLight} from '../lib/utils/theme';

const globals = css`
  html, 
  body {
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default function App({ Component, pageProps }) {

  return (
      <Provider store={store}>
          <Global styles={globals} />
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={store.getState().darkMode ? themeOptionsDark : themeOptionsLight}>
                  <CssBaseline />
                  <Page>
                      <Component {...pageProps} />
                  </Page>
              </ThemeProvider>
          </StyledEngineProvider>
      </Provider>
  );
}
