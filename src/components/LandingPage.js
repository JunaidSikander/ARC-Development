import React from 'react';
import Lottie from 'react-lottie';
//Animation File
import animationData from '../animations/landinganimation/data';
//Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
        }
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
    }
}));

const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> { /*----- Hero Block -----*/}
                <Grid justify='flex-end' alignItems='center' container>
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant='h2' align='center'>Bringing West Coast Technology <br/>to the
                            Midwest</Typography>
                        <Grid container justify='center' className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant='contained'>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}> Learn More </span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions}
                                height={'100%'}
                                width={'100%'}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> { /*----- Service Block -----*/}
                <Grid container justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
                    <Grid item
                          style={{
                              marginLeft: matchesSM ? 0 : '5em',
                              textAlign: matchesSM ? 'center' : undefined
                          }}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from investigation to
                            <span className={classes.specialText}> celebration.</span>
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton}>
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt='custom software icon' src='/assets/customSoftwareIcon.svg'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LandingPage
