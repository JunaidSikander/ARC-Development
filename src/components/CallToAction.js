import React from 'react';
import {Link} from "react-router-dom";
import {ButtonArrow} from "components";
import {callToActionStyle, commonStyle} from "styles"
//Material UI Components
import {useTheme} from "@material-ui/styles";
import {Grid, Typography, Button, useMediaQuery} from "@material-ui/core";

const CallToAction = ({setValue}) => {
    const classes = callToActionStyle();
    const commonClasses = commonStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return <Grid container
                 alignItems='center'
                 justify={matchesSM ? 'center' : 'space-between'}
                 className={commonClasses.background}
                 direction={matchesSM ? 'column' : 'row'}>
        <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h2'>
                        Simple Software. <br/> Revolutionary Results.
                    </Typography>
                    <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>
                        Take advantage of 21st Century
                    </Typography>
                    <Grid container item justify={matchesSM ? 'center' : undefined}>
                        <Button variant='outlined'
                                className={commonClasses.learnButton}
                                component={Link}
                                onClick={() => setValue(2)}
                                to='/revolution'>
                            <span style={{marginRight: 5}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button variant='contained'
                    className={classes.estimateButton}
                    component={Link}
                    onClick={() => setValue(5)}
                    to='/estimate'>
                Free Estimate
            </Button>
        </Grid>
    </Grid>
};

export default CallToAction;
