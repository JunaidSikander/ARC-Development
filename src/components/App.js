import React, {useState} from 'react';
//Material UI Component
import {ThemeProvider} from "@material-ui/styles";
// Components
import theme from './ui/Theme'
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";

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
                    <Route exact path="/" render={(props) =>
                        <LandingPage {...props}
                                     setValue={setValue}
                                     setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/services" render={(props) =>
                        <Services {...props}
                                  setValue={setValue}
                                  setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/customsoftware" render={(props) =>
                        <CustomSoftware {...props}
                                        setValue={setValue}
                                        setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/mobileapps" render={(props) =>
                        <MobileApps {...props}
                                        setValue={setValue}
                                        setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/websites" render={(props) =>
                        <Websites {...props}
                                    setValue={setValue}
                                    setSelectedIndex={setSelectedIndex}/>}/>
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
