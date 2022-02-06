import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/redux/store';
import { ThemeProvider as MuiProvider } from '@mui/material';
import { ThemeProvider as StyledProvider } from 'styled-components';
import projectTheme from './global/styles';

ReactDOM.render(
  <React.StrictMode>
    <StyledProvider theme={projectTheme}>
      <MuiProvider theme={projectTheme}>
        {/* Prover o store para aplicação */}
        <Provider store={store}>
          <App />
        </Provider>
      </MuiProvider>
    </StyledProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
