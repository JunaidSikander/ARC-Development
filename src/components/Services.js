import React from 'react';
import {Link} from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
//Material UI Components
import {makeStyles, useMediaQuery, useTheme} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
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

const Services = ({setValue, setSelectedIndex}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return <Grid container classes={{root: classes.root}} direction='column'>
        <Grid item style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em'
        }}>
            <Typography variant='h2'
                        align={matchesSM ? 'center' : undefined}
                        gutterBottom>Services</Typography>
        </Grid>
        <Grid item> { /*----- iOS/Android  Block -----*/}
            <Grid container
                  justify={matchesSM ? "center" : 'flex-end'}
                  className={classes.serviceContainer}
                  style={{marginTop: matchesSM ? '1em' : '5em'}}
            >
                <Grid item
                      style={{
                          textAlign: matchesSM ? 'center' : undefined,
                          width: matchesSM ? undefined : '35em'
                      }}>
                    <Typography variant='h4'>
                        iOS/Android App Development
                    </Typography>
                    <Typography variant='subtitle1' className={classes.subtitle}>
                        Extend Functionality. Extend Access. Increase Engagement.
                    </Typography>
                    <Typography variant='subtitle1'>
                        Integrate your web experience or create a standalone app
                        {matchesSM ? null : <br/>} with either mobile platform.
                    </Typography>
                    <Button variant='outlined'
                            className={classes.learnButton}
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(2)
                            }}
                            component={Link}
                            to='/mobileapps'
                    >
                        <span style={{marginRight: 10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : '5em',}}>
                    <img className={classes.icon}
                         alt='mobile phone icon'
                         src='/assets/mobileIcon.svg'
                         width='250em'/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item> { /*----- Custom Software Block -----*/}
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
                    <Button variant='outlined'
                            className={classes.learnButton}
                            component={Link}
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(1)
                            }}
                            to='/customsoftware'>
                        <span style={{marginRight: 10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img className={classes.icon} alt='custom software icon' src='/assets/customSoftwareIcon.svg'/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item> { /*----- Website Block -----*/}
            <Grid container
                  justify={matchesSM ? "center" : 'flex-end'}
                  className={classes.serviceContainer}
                  style={{marginBottom: '10em'}}
            >
                <Grid item
                      style={{
                          textAlign: matchesSM ? 'center' : 'undefined',
                          width: matchesSM ? undefined : '35em'
                      }}>
                    <Typography variant='h4'>
                        Website Development
                    </Typography>
                    <Typography variant='subtitle1' className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant='subtitle1'>
                        Optimized for Search Engines, built for speed
                    </Typography>
                    <Button variant='outlined'
                            className={classes.learnButton}
                            component={Link}
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(3)
                            }}
                            to='/websites'
                    >
                        <span style={{marginRight: 10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : '5em',}}>
                    <img className={classes.icon}
                         alt='website icon'
                         src='/assets/websiteIcon.svg'
                         width='250em'
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
};

export default Services;
