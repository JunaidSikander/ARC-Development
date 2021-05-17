import React, {cloneElement, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {logo} from "assets";
import { headerStyles } from "styles"
// Material UI Components
import {useTheme} from "@material-ui/styles";
import {
    AppBar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

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

export default function Header ({value, setValue, selectedIndex, setSelectedIndex}) {
    const classes = headerStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
    ];

    const routes = [
        {name: 'Home', link: '/', activeIndex: 0},
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event)
        },
        {name: 'The Revolution', link: "/revolution", activeIndex: 2},
        {name: 'About Us', link: "/about", activeIndex: 3},
        {name: 'Contact Us', link: "/contact", activeIndex: 4},
    ];

    const handleChange = (e, newValue) => setValue(newValue);

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
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    setValue(5);
                    break;
                default:
                    break;
            }
        });
    }, [value, selectedIndex, menuOptions, routes]);

    const tabs = (
        <>
            <Tabs
                className={classes.tabContainer}
                value={value}
                onChange={handleChange}
                indicatorColor="primary">
                {routes.map((route, index) => (
                    <Tab aria-owns={route.ariaOwns}
                         aria-haspopup={route.ariaPopup}
                         className={classes.tab}
                         component={Link}
                         key={`${route}${index}`}
                         label={route.name}
                         onMouseOver={route.mouseOver}
                         to={route.link}
                    />
                ))}
            </Tabs>
            <Button className={classes.button} component={Link}
                    to="/estimate" variant="contained"
                    color="secondary" onClick={() => setValue(5)}>
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                classes={{paper: classes.menu}}
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
                style={{ zIndex: 1302 }} // To Avoid Override Appbar
                keepMounted>

                {menuOptions.map((option, i) => (
                    <MenuItem key={i}
                              classes={{root: classes.menuItem}}
                              component={Link}
                              to={option.link}
                              onClick={(e) => {
                                  handleMenuItemClick(e, i);
                                  setValue(1);
                                  handleClose();
                              }}
                              selected={i === selectedIndex && value === 1}>
                        {option.name} </MenuItem>
                ))}
            </Menu>
        </>
    );

    const drawer = (
        <>
            <SwipeableDrawer classes={{paper: classes.drawer}}
                             disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)}>
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            onClick={() => {
                                setOpenDrawer(false);
                                setValue(route.activeIndex)
                            }}
                            key={`${route}${route.activeIndex}`}
                            selected={value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            divider button component={Link} to={route.link}>
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}

                    <ListItem classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                              onClick={() => {
                                  setOpenDrawer(false);
                                  setValue(5)
                              }}
                              selected={value === 5}
                              divider button component={Link} to='/estimate'>
                        <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton classes={{root: classes.drawerIconContainer}}
                        onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    );

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            disableRipple
                            component={Link}
                            to="/"
                            onClick={() => setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        {matchesMD ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
};
