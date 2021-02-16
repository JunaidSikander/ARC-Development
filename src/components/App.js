import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
// Components
import theme from './ui/Theme'
import Header from "./ui/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={() => <div>Home</div>}/>
                    <Route path="/services" component={() => <div>Services</div>}/>
                    <Route path="/customsoftware" component={() => <div>Custom Software</div>}/>
                    <Route path="/mobileapp" component={() => <div>Mobile App</div>}/>
                    <Route path="/revolution" component={() => <div>Revolution</div>}/>
                    <Route path="/about" component={() => <div>About us</div>}/>
                    <Route path="/contact" component={() => <div>Contact us</div>}/>
                    <Route path="/estimate" component={() => <div>Fee Estimate</div>}/>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
