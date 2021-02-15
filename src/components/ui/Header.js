import React, {cloneElement} from 'react';
// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";

//Components
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '2em'
    },
    logo: {
        height: '6em'
    }
}));

export default function(props){
    const classes = useStyles();

    return(
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img alt="company logo" className={classes.logo} src={logo} />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
};
