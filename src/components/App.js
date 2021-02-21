import React, {useState} from 'react';
//Material UI Component
import {ThemeProvider} from "@material-ui/styles";
// Components
import theme from './ui/Theme'
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from "./LandingPage";

function App() {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/services" component={() => <div>Services</div>}/>
                    <Route path="/customsoftware" component={() => <div>Custom Software</div>}/>
                    <Route path="/mobileapps" component={() => <div>Mobile App</div>}/>
                    <Route path="/websites" component={() => <div>Websites</div>}/>
                    <Route path="/revolution" component={() => <div>Revolution</div>}/>
                    <Route path="/about" component={() => <div>About us</div>}/>
                    <Route path="/contact" component={() => <div>Contact us</div>}/>
                    <Route path="/estimate" component={() => <div>Fee Estimate</div>}/>
                </Switch>
                <Footer value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
