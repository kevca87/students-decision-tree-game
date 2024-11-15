import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles'
  
let theme = createTheme({
typography: {
    fontFamily: `"Sora", sans-serif`,
    fontWeightRegular: 500,
    fontSize: 16,
    h1 : {
      fontWeight : 600,
      fontSize : 170
    },
    h2 : {
      fontWeight : 600,
      fontSize : 100
    },
    // h3 : {
    //     fontFamily : `"DM Sans", sans-serif`,
    //     fontWeight : 600,
    //     fontSize : 30,
    // },
    // h4 : {
    //     fontFamily : `"DM Sans", sans-serif`,
    //     fontWeight : 600,
    //     fontSize : 25
    // },
    h6 : {
        fontWeight : 500,
        fontSize : 20,
        //letterSpacing: 0,
    },
    subtitle1 : {
        fontWeight : 400,
        fontSize : 14,
    },
    subtitle2 : {
        fontWeight : 400,
        fontSize : 12
    }
},
palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#24292f', //orange
      // dark: will be calculated from palette.primary.main,
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#0066ff',
      main: '#FFFFFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#0f141a',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: '#0f141a',
      secondary: '#536471'
    },
  }
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider theme={theme}><App/></ThemeProvider>)