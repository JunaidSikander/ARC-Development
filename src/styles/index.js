import callToActionStyle from 'styles/components/callToAction.style'
import footerStyle from "styles/components/footer.style";
import headerStyles from "styles/components/header.style";
import aboutStyle from "styles/pages/about.style";
import contactStyle from "styles/pages/contact.style";
import customSoftwareStyle from "styles/pages/customSoftware.style";
import estimateStyle from "styles/pages/estimate.style";
import landingPageStyle from "styles/pages/landingPage.style";
import mobileAppsStyles from "styles/pages/mobileApps.style";
import servicesStyle from "styles/pages/services.style";
import websitesStyle from "styles/pages/websites.style";
import commonStyle from "styles/shared/common.style";


import {makeStyles} from "@material-ui/core";
import {background, infoBackground, mobileBackground, revolutionBackground} from "../assets";


export {
    callToActionStyle,
    footerStyle,
    headerStyles,
    aboutStyle,
    contactStyle,
    customSoftwareStyle,
    estimateStyle,
    landingPageStyle,
    mobileAppsStyles,
    servicesStyle,
    websitesStyle,
    commonStyle
}


const footer = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adorment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '18em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '12em'
        },
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em',
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: "0.5rem"
    }
}));

const header = makeStyles(theme => ({
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
            height: '4.2em',
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
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
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
        '& .MuiListItemText-root': {
            opacity: 1
        },
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

const about = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300,
            maxWidth: 300
        }
    }
}));

const contact = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
        },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
            width: 225
        }
    }
}));

const customSoftware = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    itemContainer: {
        maxWidth: "40em"
    }
}));

const estimate = makeStyles(theme => ({
    icon: {
        width: '12em',
        height: '10em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: '1.25rem',
        marginTop: '5em',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2rem",
        color: theme.palette.common.orange
    }
}));

const landingPage = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '30em',
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145

    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        },
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        }
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1rem'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingRight: 0,
            paddingLeft: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
}));

const mobileApps = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
}));

const services = makeStyles(theme => ({
    root: {
        padding: 0,
        margin: 0
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1rem'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
}));

const websites = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}));
