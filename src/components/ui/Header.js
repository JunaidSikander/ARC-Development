import React, {cloneElement, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    };

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0)
            setValue(0);
        else if (window.location.pathname === '/services' && value !== 1)
            setValue(1);
        else if (window.location.pathname === '/revolution' && value !== 2)
            setValue(2);
        else if (window.location.pathname === '/about' && value !== 3)
            setValue(3);
        else if (window.location.pathname === '/contact' && value !== 4)
            setValue(4);
        else if (window.location.pathname === '/estimate' && value !== 5)
            setValue(5);
    }, [value]);

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
                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                className={classes.tab}
                                component={Link}
                                onMouseOver={event => handleClick(event)}
                                to="/services"
                                label="Services"/>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
                            <Tab className={classes.tab} component={Link} to="/about" label="About us"/>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"/>
                        </Tabs>
                        <Button className={classes.button} component={Link} to="/estimate" variant="contained"
                                color="secondary">
                            Free Estimate
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{onMouseLeave: handleClose}}>
                            <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                      component={Link}
                                      to="services">
                                Services
                            </MenuItem>
                            <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                      component={Link}
                                      to="customsoftware">
                                Custom Software Development
                            </MenuItem>
                            <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                      component={Link}
                                      to="mobileapps">
                                Mobile App Development
                            </MenuItem>
                            <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                      component={Link}
                                      to="websites">
                                Website Development
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
};
