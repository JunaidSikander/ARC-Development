import {createMuiTheme} from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#868686";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        },
    },
    typography: {
        tab: {
            fontFamily: 'Railway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        },
        h2: {
            fontFamily: 'Railway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: 'Pacifico',
            fontSize: '2.5rem',
            color: `${arcBlue}`
        },
        h4: {
            fontFamily: 'Railway',
            fontSize: '1.75rem',
            color: `${arcBlue}`,
            fontWeight: 700
        },
        h6: {
            fontWeight: 500,
            fontFamily: 'Railway',
            color: arcBlue,
            lineHeight: 1
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: `${arcGray}`
        },
        subtitle2: {
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 300
        },
        body1: {
            fontSize: '1.25rem',
            color: arcGray,
            fontWeight: 300
        },
        learnButton: {
            borderColor: `${arcBlue}`,
            color: `${arcBlue}`,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: '1rem'
            }
        },
        MuiInput: {
            root: {
              color: arcGray
            },
            underline: {
                '&:before': {
                    borderBottom: `2px solid ${arcBlue}`
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
});
