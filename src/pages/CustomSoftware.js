import React from 'react';
import Lottie from 'react-lottie';
import {Link} from "react-router-dom";
import {CallToAction, Paragraph} from "components";
import {commonStyle, customSoftwareStyle} from "styles"
import {backArrow, bulb, cash, forwardArrow, root, stopwatch} from "assets"
//Animation File
import {automationAnimation, documentsAnimation, scaleAnimation, uxAnimation} from "animations"
//Material UI Components
import {Grid, Hidden, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

const CustomSoftware = ({setValue, setSelectedIndex}) => {
    const classes = customSoftwareStyle();
    const commonClasses = commonStyle();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    //Static Contents
    const customSoftwareParagraphs = [
        'Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.',
        'Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.',
        'Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.',
        'We create exactly what you what, exactly how you want it.'
    ];
    const automationParagraphs = [
        'Why waste time when you don’t have to?',
        'We can help you identify processes with time or event based actions which can now easily be automated.',
        'Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.'
    ];
    const userExperienceParagraphs = [
        'A good design that isn’t usable isn’t a good design.',
        'So why are so many pieces of software complicated, confusing and frustrating?',
        'By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.'
    ];
    const rootCauseParagraphs = [
        'Many problems are merely symptoms of larger, underlying issues.',
        'We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.'
    ];
    const digitalDocumentParagraphs = [
        'Reduce Errors. Reduce Waste. Reduce Costs.',
        'Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.',
        'By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help theEarth.'
    ];


    //Animation Configuration
    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
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
                            to="/services"
                            onClick={() => setSelectedIndex(0)}
                        >
                            <img src={backArrow} alt="Back to Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={commonClasses.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Paragraph paragraphs={customSoftwareParagraphs} align="justify"/>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={commonClasses.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/mobileapps"
                            onClick={() => setSelectedIndex(2)}
                        >
                            <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="center"
                style={{marginTop: "15em", marginBottom: "20em"}}
                className={commonClasses.rowContainer}
            >
                <Grid
                    item
                    container
                    direction="column"
                    md
                    alignItems="center"
                    style={{maxWidth: "40em"}}
                >
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={bulb} alt="lightbulb"/>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    md
                    alignItems="center"
                    style={{
                        maxWidth: "40em",
                        marginTop: matchesSM ? "10em" : 0,
                        marginBottom: matchesSM ? "10em" : 0
                    }}
                >
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch"/>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    md
                    alignItems="center"
                    style={{maxWidth: "40em"}}
                >
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justify="space-between"
                className={commonClasses.rowContainer}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    style={{marginBottom: matchesMD ? "15em" : 0}}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Paragraph paragraphs={digitalDocumentParagraphs} align={matchesSM ? "center" : 'justify'}/>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={documentsOptions}
                            isStopped={true}
                            style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item md>
                        <Lottie
                            options={scaleOptions}
                            isStopped={true}
                            style={{maxHeight: 260, maxWidth: 280}}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "left"}>
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                align={matchesSM ? "center" : "justify"}
                                paragraph
                            >
                                Whether you’re a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                style={{marginTop: "20em", marginBottom: "20em"}}
                className={commonClasses.rowContainer}
            >
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img
                            src={root}
                            alt="tree with roots extending out"
                            height={matchesSM ? "300em" : "450em"}
                            width={matchesSM ? "300em" : "450em"}
                        />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Root-Cause Analysis
                        </Typography>
                        <Paragraph paragraphs={rootCauseParagraphs} align='center'/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justify="space-between"
                style={{marginBottom: "20em"}}
                className={commonClasses.rowContainer}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    style={{marginBottom: matchesMD ? "15em" : 0}}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Paragraph paragraphs={automationParagraphs} align={matchesSM ? "center" : 'justify'}/>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={automationOptions}
                            isStopped={true}
                            style={{maxHeight: 290, maxWidth: 280}}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item md>
                        <Lottie
                            options={uxOptions}
                            isStopped={true}
                            style={{maxHeight: 310, maxWidth: 155}}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "left"}>
                                User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Paragraph paragraphs={userExperienceParagraphs} align={matchesSM ? "center" : "justify"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    );
};

export default CustomSoftware;
