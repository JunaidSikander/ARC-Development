import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import {ButtonArrow, CallToAction} from "components";
import {commonStyle, landingPageStyle} from "styles"
import {customSoftwareIcon, mobileIcon, websiteIcon} from 'assets';
//Animation File
import {landinganimation} from 'animations';
//Material UI Components
import {Button, Card, CardContent, Grid, Typography, useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

const LandingPage = ({setValue, setSelectedIndex}) => {
    const classes = landingPageStyle();
    const commonClasses = commonStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: landinganimation,
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
                                <Button className={classes.estimateButton}
                                        component={Link}
                                        onClick={() => setValue(5)}
                                        to='/estimate'
                                        variant='contained'>
                                    Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined'
                                        className={classes.learnButtonHero}
                                        component={Link}
                                        onClick={() => setValue(2)}
                                        to='/revolution'>
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
            <Grid item> { /*----- Custom Software Block -----*/}
                <Grid container justify={matchesSM ? "center" : undefined} className={commonClasses.serviceContainer}>
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
                            <span className={commonClasses.specialText}> celebration.</span>
                        </Typography>
                        <Button variant='outlined'
                                className={commonClasses.learnButton}
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
                        <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> { /*----- iOS/Android  Block -----*/}
                <Grid container justify={matchesSM ? "center" : 'flex-end'} className={commonClasses.serviceContainer}>
                    <Grid item
                          style={{textAlign: matchesSM ? 'center' : undefined}}>
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
                                className={commonClasses.learnButton}
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
                        <img className={classes.icon} alt='mobile phone icon' src={mobileIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> { /*----- Website Block -----*/}
                <Grid container justify={matchesSM ? "center" : undefined} className={commonClasses.serviceContainer}>
                    <Grid item
                          style={{
                              marginLeft: matchesSM ? 0 : '5em',
                              textAlign: matchesSM ? 'center' : undefined
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
                                className={commonClasses.learnButton}
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
                    <Grid item>
                        <img className={classes.icon} alt='website icon' src={websiteIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> { /*----- The Revolution Block -----*/}
                <Grid container justify="center" alignItems="center" style={{height: '100em', marginTop: '12em'}}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction='column' style={{textAlign: 'center'}}>
                                <Grid item>
                                    <Typography variant='h3' gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'>
                                        Visionary insights coupled with cutting-edge technology is a recipe for
                                        revolution.
                                    </Typography>
                                    <Button variant='outlined'
                                            className={classes.learnButtonHero}
                                            onClick={() => setValue(2)}
                                            component={Link}
                                            to='/revolution'
                                    >
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                </Grid>
            </Grid>
            <Grid item> { /*----- Information Block -----*/}
                <Grid container style={{height: '80em'}}
                      alignItems='center'
                      className={classes.infoBackground}>
                    <Grid item container style={{textAlign: matchesXS ? 'center' : 'inherit'}}
                          direction={matchesXS ? 'column' : 'row'}
                    >
                        <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}}>
                            <Grid container direction='column' style={{marginBottom: matchesXS ? '10em' : 0}}>
                                <Typography variant='h2' style={{color: 'white'}}>About Us</Typography>
                                <Typography variant='subtitle2'>Let's Get Personal</Typography>
                                <Grid item>
                                    <Button variant='outlined'
                                            className={commonClasses.learnButton}
                                            component={Link}
                                            onClick={() => setValue(3)}
                                            to='/about'
                                            style={{color: 'white', borderColor: 'white'}}>
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill='white'/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm
                              style={{
                                  marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                                  textAlign: matchesXS ? 'center' : 'right'
                              }}>
                            <Grid container direction='column'>
                                <Typography variant='h2' style={{color: 'white'}}>Contact Us</Typography>
                                <Typography variant='subtitle2'>Say Hello! 👋</Typography>
                                <Grid item>
                                    <Button variant='outlined'
                                            className={commonClasses.learnButton}
                                            component={Link}
                                            onClick={() => setValue(4)}
                                            to='/contact'
                                            style={{color: 'white', borderColor: 'white'}}>
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill='white'/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> { /*----- Call To Action Block -----*/}
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
};

export default LandingPage
