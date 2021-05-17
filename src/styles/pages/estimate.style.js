import {makeStyles} from "@material-ui/core";


const estimateStyle = makeStyles(theme => ({
    icon: {
        width: '12em',
        height: '10em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        marginTop: "5em",
        fontSize: "1.25rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2rem",
        color: theme.palette.common.orange
    }
}));

export default estimateStyle;
