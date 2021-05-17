import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Material UI Component
import {ThemeProvider} from "@material-ui/styles";
// Components
import {Footer, Header, theme} from 'components'
import {About, Contact, CustomSoftware, Estimate, LandingPage, MobileApps, Revolution, Services, Websites} from "pages";

export default function App() {
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
                    <Route path="/revolution" render={(props) =>
                        <Revolution {...props}
                                    setValue={setValue}
                                    setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/about" render={(props) =>
                        <About {...props}
                               setValue={setValue}
                               setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/contact" render={(props) =>
                        <Contact {...props}
                                 setValue={setValue}
                                 setSelectedIndex={setSelectedIndex}/>}/>
                    <Route path="/estimate" render={(props) =>
                        <Estimate {...props}
                                  setValue={setValue}
                                  setSelectedIndex={setSelectedIndex}/>}/>
                </Switch>
                <Footer value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
            </Router>
        </ThemeProvider>
    );
}
