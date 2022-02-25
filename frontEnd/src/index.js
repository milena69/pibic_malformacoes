import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/redux/store';
import { ThemeProvider as MuiProvider } from '@mui/material';
import { ThemeProvider as StyledProvider } from 'styled-components';
import projectTheme from './global/styles';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { AlertaToastError } from './components';
// import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}
const AlertTemplate = ({ message, options }) => (
  <AlertaToastError message={message} />
  // <div className="">{message}</div>
);
ReactDOM.render(
  <React.StrictMode>
    <StyledProvider theme={projectTheme}>
      <MuiProvider theme={projectTheme}>
        {/* Prover o store para aplicação */}
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Provider>
      </MuiProvider>
    </StyledProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

