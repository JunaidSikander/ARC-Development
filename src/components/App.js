import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
// Components
import theme from './ui/Theme'
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hello
    </ThemeProvider>
  );
}

export default App;
