import {makeStyles} from "@material-ui/core";

const callToActionStyle = makeStyles(theme => ({
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export default callToActionStyle;
