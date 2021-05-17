import {makeStyles} from "@material-ui/core";

const servicesStyle = makeStyles(theme => ({
    root: {
        padding: 0,
        margin: 0
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
}));

export default servicesStyle;
