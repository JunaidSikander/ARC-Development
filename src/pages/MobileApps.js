import React from "react";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {CallToAction, Paragraph} from "components";
import {backArrow, extendAccess, forwardArrow, increaseEngagement, swissKnife} from "assets";
import {commonStyle} from "styles"
//Animation File
import {integrationAnimation} from "animations";
//Material UI Components
import {Grid, Hidden, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

const MobileApps = ({setValue, setSelectedIndex}) => {
    const classes = commonStyle();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    //Static Content
    const mobileDevelopmentParagraphs = [
        'Mobile apps allow you to take your tools on the go.',
        'Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new  world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.',
        'Convenience. Connection.'
    ];
    const integrationParagraphs = [
        'Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.',
        'This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.'
    ];
    const simulationParagraphs = [
        'Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.',
        'This significantly reduces costs and creates a more unified brand experience across all devices.'
    ];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Grid container direction="column">
            <Grid
                item
                container
                direction="row"
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? "1em" : "2em"}}
            >
                <Hidden mdDown>
                    <Grid
                        item
                        className={classes.arrowContainer}
                        style={{marginRight: "1em", marginLeft: "-3.5em"}}
                    >
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/customsoftware"
                            onClick={() => setSelectedIndex(1)}
                        >
                            <img
                                src={backArrow}
                                alt="Back to Custom Software Development Page"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paragraph paragraphs={mobileDevelopmentParagraphs} align={matchesMD ? "center" : "justify"}/>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/websites"
                            onClick={() => setSelectedIndex(3)}
                        >
                            <img
                                src={forwardArrow}
                                alt="Forward to Website Development Page"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                style={{marginTop: "15em", marginBottom: "15em"}}
                className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : undefined}
                            variant="h4"
                            gutterBottom
                        >
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paragraph paragraphs={integrationParagraphs} align={matchesSM ? "center" : 'justify'}/>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie
                        options={defaultOptions}
                        isStopped={true}
                        style={{maxWidth: "20em"}}
                    />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : "left"}
                            variant="h4"
                            gutterBottom
                        >
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paragraph paragraphs={simulationParagraphs} align={matchesSM ? "center" : "justify"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                className={classes.rowContainer}
                style={{marginBottom: "15em"}}
            >
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swissKnife} alt="swiss army knife"/>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    md
                    style={{
                        marginTop: matchesMD ? "10em" : 0,
                        marginBottom: matchesMD ? "10em" : 0
                    }}
                >
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img
                            src={extendAccess}
                            alt="tear-one-off sign"
                            style={{maxWidth: matchesXS ? "20em" : "28em"}}
                        />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={increaseEngagement} alt="app with notification"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    );
};

export default MobileApps;
