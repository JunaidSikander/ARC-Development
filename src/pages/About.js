import React from 'react';
import {founder, history, puppy, yearbook} from "assets";
import {CallToAction} from "components";
import {aboutStyle, commonStyle} from "styles"
//Material UI Components
import {useTheme} from "@material-ui/styles";
import {Avatar, Grid, Hidden, Typography, useMediaQuery} from "@material-ui/core";


const About = ({setValue}) => {
    const classes = aboutStyle();
    const commonClasses = commonStyle();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="column">
            <Grid
                item
                className={commonClasses.rowContainer}
                style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography align={matchesMD ? "center" : undefined} variant="h2">
                    About Us
                </Typography>
            </Grid>
            <Grid
                item
                container
                justify="center"
                className={commonClasses.rowContainer}
                style={{marginTop: "3em"}}>
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual
                    to their interests, technology is meant to bring us closer to what we
                    care about in the best way possible. Arc Development will use that
                    principle to provide fast, modern, inexpensive, and aesthetic software
                    to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid
                item
                container
                className={commonClasses.rowContainer}
                style={{marginTop: "10em", marginBottom: "10em"}}
                direction={matchesMD ? "column" : "row"}
                alignItems={matchesMD ? "center" : undefined}
                justify="space-between">
                <Grid item>
                    <Grid
                        item
                        container
                        direction="column"
                        lg
                        style={{maxWidth: "35em"}}>
                        <Grid item>
                            <Typography
                                align={matchesMD ? "center" : undefined}
                                variant="h4"
                                gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                                style={{fontWeight: 700, fontStyle: "italic"}}>
                                We're the new kid on the block
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s
                                business problems.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph>
                                It all started with one question: Why aren’t all businesses
                                using available technology? There are many different answers to
                                that question: economic barriers, social barriers, educational
                                barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                We aim to be a powerful force in overcoming these obstacles.
                                Recent developments in software engineering and computing power,
                                compounded by the proliferation of smart phones, has opened up
                                infinite worlds of possibility. Things that have always been
                                done by hand can now be done digitally and automatically, and
                                completely new methods of interaction are created daily. Taking
                                full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                All this change can be a lot to keep up with, and that’s where
                                we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img
                            src={history}
                            alt="quill pen sitting on top of book"
                            style={{maxHeight: matchesMD ? 200 : "22em"}}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="column"
                alignItems="center"
                className={commonClasses.rowContainer}
                style={{marginBottom: "15em"}}
            >
                <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding when I was 9 years old.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={founder} className={classes.avatar}/>
                </Grid>
                <Grid item container justify={matchesMD ? "center" : undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                I taught myself basic coding from a library book in third grade,
                                and ever since then my passion has solely been set on learning —
                                learning about computers, learning mathematics and philosophy,
                                studying design, always just learning.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help
                                others with the intuition I have developed.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        container
                        direction="column"
                        lg
                        alignItems={matchesMD ? "center" : undefined}
                        style={{marginBottom: matchesMD ? "2.5em" : 0}}
                    >
                        <Grid item>
                            <img
                                src={yearbook}
                                alt="yearbook page about founder"
                                style={{maxWidth: matchesMD ? 300 : undefined}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page from my Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                I taught myself basic coding from a library book in third grade,
                                and ever since then my passion has solely been set on learning —
                                learning about computers, learning mathematics and philosophy,
                                studying design, always just learning.
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help
                                others with the intuition I have developed.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        container
                        direction="column"
                        lg
                        alignItems={matchesMD ? "center" : "flex-end"}
                    >
                        <Grid item>
                            <img
                                src={puppy}
                                alt="grey spotted puppy"
                                style={{maxWidth: matchesMD ? 300 : undefined}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                my miniature dapple dachshund, Sterling
                            </Typography>
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

export default About;
