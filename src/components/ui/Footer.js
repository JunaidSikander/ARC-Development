import React from 'react';
import footerAdorment from '../../assets/Footer Adornment.svg'
import {Link} from 'react-router-dom'
//Material UI Components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";


const useStyles = makeStyles(theme => ({
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

const Footer = ({value, setValue, selectedIndex, setSelectedIndex}) => {
    const classes = useStyles();

    const footerMenus = [
        [{name: 'Home', link: '/', activeIndex: 0 }],
        [
            {name: "Services", link: "/services", activeIndex: 1,selectedIndex: 0},
            {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
            {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
            {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
            ],
        [{name: 'The Revolution', link: "/revolution", activeIndex: 2 }, { name: 'Vision' }, { name: 'Technology' }, { name: 'Process' } ],
        [{name: 'About Us', link: "/about", activeIndex: 3 }, { name: 'History' }, { name: 'Team'}],
        [{name: 'Contact Us', link: "/contact", activeIndex: 4 }]
    ];

    const images = [
        {name: 'facebook.svg', href: 'https://www.facebook.com/', rel: 'noopener noreferrer', target: '_blank', alt: 'facebook logo'},
        {name: 'instagram.svg', href: 'https://www.instagram.com', rel: 'noopener noreferrer', target: '_blank', alt: 'instagram logo'},
        {name: 'twitter.svg', href: 'https://twitter.com/', rel: 'noopener noreferrer', target: '_blank', alt: 'twitter logo'},
    ];


    return <footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                { footerMenus.map((menu, index) => (
                    <Grid key={`${menu}${index}`} item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            { menu.map((item, index) => (
                                <Grid item
                                      className={classes.link}
                                      key={`${item}${index}`}
                                      component={Link}
                                      to={item.link}
                                      onClick={() => { setValue(item.activeIndex); setSelectedIndex(item.selectedIndex);   }}
                                >
                                    {item.name}
                                </Grid>
                            )) }
                        </Grid>
                    </Grid>
                )) }
            </Grid>
        </Hidden>
        <img className={classes.adorment} alt="black decorative slash" src={footerAdorment}/>
        <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
            {images.map( image =>
                <Grid item
                      component={"a"}
                      href={image.href}
                      rel={image.rel}
                      target={image.target}>
                    <img alt={image.alt} src={`assets/${image.name}`} className={classes.icon}/>
                </Grid>
            )}
        </Grid>
    </footer>
};

export default Footer
