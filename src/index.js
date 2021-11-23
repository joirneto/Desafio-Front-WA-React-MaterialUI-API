import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/layout'
import { CssBaseline } from "@mui/material";
import { theme } from './lib/theme'
import { ThemeProvider } from "@mui/material";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <App title="Quiz Game" />
      </Layout>
    </ThemeProvider>
  </>
  ,
  document.getElementById('root')
);


