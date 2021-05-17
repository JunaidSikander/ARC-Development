import React from "react";
import {Link} from "react-router-dom";
import {CallToAction, Paragraph} from "components";
import {analytics, backArrow, ecommerce, forwardArrow, outreach, seo} from "assets";
import {commonStyle, websitesStyle} from "styles"
//Material UI Components
import {Grid, Hidden, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

const Websites = ({setValue, setSelectedIndex}) => {
    const classes = websitesStyle();
    const commonClasses = commonStyle();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    //Static Content
    const websiteParagraphs = [
        'Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.',
        'From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.'
    ];
    const seoParagraphs = [
        'How often have you ever been to the second page of Google results?',
        'If you’re like us, probably never.',
        'Customers don’t go there either, so we make sure your website is designed to end up on top.'
    ];

    return (
        <Grid container direction="column">
            <Grid
                item
                container
                direction="row"
                justify={matchesMD ? "center" : undefined}
                className={commonClasses.rowContainer}
                style={{marginTop: matchesXS ? "1em" : "2em"}}
            >
                <Hidden mdDown>
                    <Grid
                        item
                        className={commonClasses.arrowContainer}
                        style={{marginRight: "1em", marginLeft: "-3.5em"}}
                    >
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/mobileapps"
                            onClick={() => setSelectedIndex(2)}
                        >
                            <img
                                src={backArrow}
                                alt="Back to iOS/Android App Development Page"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={commonClasses.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paragraph paragraphs={websiteParagraphs} align={matchesMD ? "center" : "justify"}/>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={commonClasses.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/services"
                            onClick={() => setSelectedIndex(0)}
                        >
                            <img src={forwardArrow} alt="Forward to Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={commonClasses.rowContainer}
                style={{marginTop: "15em"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography
                                align={matchesSM ? "center" : undefined}
                                variant="h4"
                                gutterBottom
                            >
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={analytics}
                                style={{marginLeft: "-2.75em"}}
                                alt="graph with magnifying glass revealing 1's and 0's"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : "justify"} variant="body1">
                        Knowledge is power, and data is 21st Century gold. Analyzing this
                        data can reveal hidden patterns and trends in your business,
                        empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                justify="flex-end"
                className={commonClasses.rowContainer}
                style={{marginBottom: "15em", marginTop: "15em"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="world outline made of dollar signs"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    style={{marginLeft: matchesSM ? 0 : "1em"}}
                    className={classes.paragraphContainer}
                >
                    <Typography
                        align={matchesSM ? "center" : "justify"}
                        variant="body1"
                        paragraph
                    >
                        It’s no secret that people like to shop online.
                    </Typography>
                    <Typography
                        align={matchesSM ? "center" : "justify"}
                        variant="body1"
                        paragraph
                    >
                        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
                        for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={commonClasses.rowContainer}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography
                                align={matchesSM ? "center" : undefined}
                                variant="h4"
                                gutterBottom
                            >
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="megaphone"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    className={classes.paragraphContainer}
                    style={{marginLeft: matchesSM ? 0 : "1em"}}
                >
                    <Typography align={matchesSM ? "center" : "justify"} variant="body1">
                        Draw people in with a dazzling website. Showing off your products
                        online is a great way to help customers decide what’s right for them
                        before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                justify="flex-end"
                className={commonClasses.rowContainer}
                style={{marginTop: "15em", marginBottom: "15em"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine
                                <br/>
                                Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="website standing on winner's podium"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    style={{marginLeft: matchesSM ? 0 : "1em"}}
                    className={classes.paragraphContainer}
                >
                    <Paragraph paragraphs={seoParagraphs} align={matchesSM ? "center" : "justify"}/>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    );
};

export default Websites;
