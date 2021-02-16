import React, {cloneElement, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
//Components
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '2em'
    },
    logo: {
        height: '6em'
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            background: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
    }
}));

export default function (props) {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    useEffect( () => {
        if(window.location.pathname === '/' && value !== 0)
            setValue(0);
        else if(window.location.pathname === '/services' && value !== 1)
            setValue(1);
        else if(window.location.pathname === '/revolution' && value !== 2)
            setValue(2);
        else if(window.location.pathname === '/about' && value !== 3)
            setValue(3);
        else if(window.location.pathname === '/contact' && value !== 4)
            setValue(4);
        else if(window.location.pathname === '/estimate' && value !== 5)
            setValue(5);
    },[value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            disableRipple
                            component={Link}
                            to="/"
                            onClick={() => setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        <Tabs
                            className={classes.tabContainer}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary">
                            <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                            <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
                            <Tab className={classes.tab} component={Link} to="/about" label="About us"/>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"/>
                        </Tabs>
                        <Button className={classes.button} component={Link} to="/estimate" variant="contained" color="secondary">
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
};
