import React from 'react';
import {Link} from 'react-router-dom'
import {facebook, footerAdorment, instagram, twitter} from "assets";
import {footerStyle} from "styles"
//Material UI Components
import {Grid, Hidden} from "@material-ui/core";

const Footer = ({setValue, setSelectedIndex}) => {
    const classes = footerStyle();

    const footerMenus = [
        [{name: 'Home', link: '/', activeIndex: 0}],
        [
            {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
            {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
            {name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
            {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
        ],
        [{
            name: 'The Revolution',
            link: "/revolution",
            activeIndex: 2
        }, {name: 'Vision', link: '/revolution'},
            {name: 'Technology', link: '/revolution'},
            {name: 'Process', link: '/revolution'}],
        [{name: 'About Us', link: "/about", activeIndex: 3}, {name: 'History', link: "/about",}, {
            name: 'Team',
            link: "/about",
        }],
        [{name: 'Contact Us', link: "/contact", activeIndex: 4}]
    ];

    const images = [
        {
            src: facebook,
            href: 'https://www.facebook.com/',
            rel: 'noopener noreferrer',
            target: '_blank',
            alt: 'facebook logo'
        },
        {
            src: instagram,
            href: 'https://www.instagram.com',
            rel: 'noopener noreferrer',
            target: '_blank',
            alt: 'instagram logo'
        },
        {
            src: twitter,
            href: 'https://twitter.com/',
            rel: 'noopener noreferrer',
            target: '_blank',
            alt: 'twitter logo'
        },
    ];

    return <footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                {footerMenus.map((menu, index) => (
                    <Grid key={`${menu}${index}`} item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            {menu.map((item, index) => (
                                <Grid item
                                      className={classes.link}
                                      key={`${item}${index}`}
                                      component={Link}
                                      to={item.link}
                                      onClick={() => {
                                          setValue(item.activeIndex);
                                          setSelectedIndex(item.selectedIndex);
                                      }}
                                >
                                    {item.name}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Hidden>
        <img className={classes.adorment} alt="black decorative slash" src={footerAdorment}/>
        <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
            {images.map((image, i) =>
                <Grid item
                      key={`${image.name}${i}`}
                      component={"a"}
                      href={image.href}
                      rel={image.rel}
                      target={image.target}>
                    <img alt={image.alt} src={image.src} className={classes.icon}/>
                </Grid>
            )}
        </Grid>
    </footer>
};

export default Footer
