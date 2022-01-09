import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navegacao from './routes';
import { ThemeProvider } from '@mui/material/styles';
import projectTheme from './global/styles';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={projectTheme}>
				<Navegacao />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
