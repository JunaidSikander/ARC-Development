import React from 'react';

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
//Material UI Components
import {makeStyles, useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./ButtonArrow";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit',
        }
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
    }
}));

const CallToAction = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery( theme.breakpoints.down('sm'));

    return <Grid container
                 alignItems='center'
                 justify={matchesSM ? 'center' : 'space-between'}
                 className={classes.background}
                 direction={matchesSM ? 'column' : 'row'}
    >
        <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h2'>
                        Simple Software. <br/> Revolutionary Results.
                    </Typography>
                    <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>
                        Take advantage of 21st Century
                    </Typography>
                    <Grid container item
                          justify={matchesSM ? 'center' : undefined}
                    >
                        <Button variant='outlined'
                                className={classes.learnButton}>
                            <span style={{marginRight: 5}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button variant='contained' className={classes.estimateButton}>Free Estimate</Button>
        </Grid>
    </Grid>
};

export default CallToAction;
