import React from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
export default function Home() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>This app is using the dark mode</main>
      </ThemeProvider>
    );
};


  
