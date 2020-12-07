import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from './AuthContext';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();