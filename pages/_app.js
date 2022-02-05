import {Provider} from 'react-redux';
import {Global, css} from '@emotion/react';
import {StyledEngineProvider} from '@mui/material/styles';

import store from '../lib/redux/store';
import AppContainer from '../components/page/AppContainer';

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
                <AppContainer pageProps={pageProps} Component={Component} />
            </StyledEngineProvider>
        </Provider>
    );
}
