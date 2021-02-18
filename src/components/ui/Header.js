import React, {cloneElement, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// Material UI Components
import {makeStyles} from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//Components
import logo from '../../assets/logo.svg';

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
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.5em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.1em',
        },
    },
    logo: {
        height: '6em',
        [theme.breakpoints.down('md')]: {
            height: '5em',
        },
        [theme.breakpoints.down('xs')]: {
            height: '3.5em',
        },
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
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '40px',
        width: '40px'
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.8
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    }
}));

export default function (props) {
    const classes = useStyles();
    const theme = useTheme();
    const mediunScreen = useMediaQuery( theme.breakpoints.down('md'));

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const menuOptions = [
        {name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "Website Development", link: "/websites"}
    ];

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    useEffect(() => {
        switch(window.location.pathname) {
            case "/":
                value !== 0 && setValue(0);
                break;
            case "/services":
                value !== 1 && setValue(1) || setSelectedIndex(0);
                break;
            case "/customsoftware":
                value !== 1 && setValue(1) || setSelectedIndex(1);
                break;
            case "/mobileapps":
                value !== 1 && setValue(1) || setSelectedIndex(2);
                break;
            case "/websites":
                value !== 1 && setValue(1) || setSelectedIndex(3);
                break;
            case "/revolution":
                value !== 2 && setValue(2);
                break;
            case "/about":
                value !== 3 && setValue(3);
                break;
            case "/contact":
                value !== 4 && setValue(4);
                break;
            case "/estimate":
                value !== 5 && setValue(5);
                break;
            default:
                break;
        }
    }, [value, selectedIndex]);

    const tabs = (
        <>
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
                classes={{ paper: classes.menu }}
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}>

                {menuOptions.map( (option, i) => (
                    <MenuItem key={i}
                              classes={{ root: classes.menuItem}}
                              component={Link}
                              onClick={(e) => {handleMenuItemClick(e,i); setValue(1)}}
                              to={option.link}
                              selected={i === selectedIndex && value === 1}>
                        {option.name} </MenuItem>
                ))}
            </Menu>
        </>
    );

    const drawer = (
        <>
            <SwipeableDrawer classes={{ paper: classes.drawer }}
                             disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)}>
                <List disablePadding>
                    <ListItem  className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
                               onClick={ () => {setOpenDrawer(false); setValue(0)} }
                               selected={value === 0}
                               divider button component={Link} to='/'>
                        <ListItemText disableTypography>Home</ListItemText>
                    </ListItem>

                    <ListItem className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
                              onClick={ () => {setOpenDrawer(false); setValue(1)} }
                              selected={value === 1}
                              divider button component={Link} to='/services'>
                        <ListItemText disableTypography>Services</ListItemText>
                    </ListItem>

                    <ListItem className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
                              onClick={ () => {setOpenDrawer(false); setValue(2)} }
                              selected={value === 2}
                              divider button component={Link} to='/revolution'>
                        <ListItemText disableTypography>The Revolution</ListItemText>
                    </ListItem>

                    <ListItem className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
                              onClick={ () => {setOpenDrawer(false); setValue(3)} }
                              selected={value === 3}
                              divider button component={Link} to='/about'>
                        <ListItemText disableTypography>About Us</ListItemText>
                    </ListItem>

                    <ListItem className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
                              onClick={ () => {setOpenDrawer(false); setValue(4)} }
                              selected={value === 4}
                              divider button component={Link} to='/contact'>
                        <ListItemText disableTypography>Contact Us</ListItemText>
                    </ListItem>

                    <ListItem className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : [classes.drawerItem, classes.drawerItemEstimate]}
                              onClick={ () => {setOpenDrawer(false); setValue(5)} }
                              selected={value === 5}
                              divider button component={Link} to='/estimate'>
                        <ListItemText disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton classes={{ root: classes.drawerIconContainer }}
                        onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    );

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
                        { mediunScreen ? drawer : tabs }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
};
