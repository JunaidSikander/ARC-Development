import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import emailjs from 'emailjs-com';
//Material UI Components
import {Button, CircularProgress, Dialog, DialogContent, Grid, makeStyles, Snackbar, TextField, Typography, useTheme} from "@material-ui/core";
//SVG icons
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg'
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
        },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em'
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
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        },
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
            width: 225
        }
    }
}));

const Contact = ({setValue}) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const [inputFields, setInputFields] = useState({name: '', email: '', phone: '', message: ''});
    const [validHelperText, setValidHelperText] = useState({email: '', phone: ''});
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert,setAlert] = useState({ open: false, message: '', backgroundColor: '' });

    //Handle Change Method with Validation
    const handleChange = (event) => {
        let valid;

        switch (event.target.id) {
            case 'email':
                setInputFields({...inputFields, ['email']: event.target.value});
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if (!valid)
                    setValidHelperText({...validHelperText, ['email']: 'Invalid email'});
                else
                    setValidHelperText({...validHelperText, ['email']: ''});
                break;

            case 'phone':
                setInputFields({...inputFields, ['phone']: event.target.value});
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if (!valid)
                    setValidHelperText({...validHelperText, ['phone']: 'Invalid phone'});
                else
                    setValidHelperText({...validHelperText, ['phone']: ''});
                break;

            default:
                setInputFields({...inputFields, [event.target.id]: event.target.value})
                break;
        }
    };

    //Submit Form with Emailjs
    const onSubmit = (event) => {
        event.preventDefault();

        setLoading(true);
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            inputFields,
            process.env.REACT_APP_USER_ID)
            .then((response) => {
                setOpen(false);
                setLoading(false);
                setAlert({open: true, message: 'Message sent successfully', backgroundColor: '#4BB543'});
                event.target.reset();
            })
            .catch((error) => {
                setAlert({open: true, message: 'Something went wrong, please try again!', backgroundColor: '#FF3232'});
                setLoading(false);
            })
    };

    const buttonContents = (
        <>
            Send Message
            <img src={airplane} alt='paper airplane' style={{marginLeft: '1em'}}/>
        </>
    );

    return (
        <Grid container>
            <Grid item container direction="column" alignItems='center'
                  justify='center' lg={4} xl={3}
                  style={{marginBottom: matchesMD ? '5em' : 0, marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0}}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant='h2' align={matchesMD ? "center" : undefined} style={{lineHeight: 1}}>Contact
                                us</Typography>
                            <Typography variant='body1' align={matchesMD ? "center" : undefined}
                                        style={{color: theme.palette.common.blue}}>
                                We're waiting.
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop: '2em'}}>
                            <Grid item>
                                <img src={phoneIcon} alt='phone' style={{marginRight: '0.5em'}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'
                                            style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                                    <a href="tel:5555555555"
                                       style={{textDecoration: 'none', color: 'inherit'}}>
                                        (555) 555-5555
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: '2em'}}>
                            <Grid item>
                                <img src={emailIcon} alt='envelope'
                                     style={{marginRight: '0.5em', verticalAlign: 'bottom'}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{
                                    color: theme.palette.common.blue,
                                    fontSize: '1rem'
                                }}>
                                    <a href="mailto:zachery@gmail.com"
                                       style={{textDecoration: 'none', color: 'inherit'}}>
                                        zachery@gmail.com
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{maxWidth: '20em'}}>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='name' fullWidth label='Name' value={inputFields.name}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='email' fullWidth error={validHelperText.email.length !== 0}
                                           helperText={validHelperText.email} label='Email' value={inputFields.email}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='phone' fullWidth error={validHelperText.phone.length !== 0}
                                           helperText={validHelperText.phone} label='Phone' value={inputFields.phone}
                                           onChange={handleChange}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
                            <TextField InputProps={{disableUnderline: true}} className={classes.message} id='message'
                                       multiline fullWidth rows={10} value={inputFields.message}
                                       onChange={handleChange}/>
                        </Grid>
                        <Grid item container justify='center' style={{marginTop: '2em'}}>
                            <Button className={classes.sendButton} variant='contained' onClick={() => setOpen(true)}
                                    disabled={
                                        inputFields.name.length === 0 ||
                                        inputFields.message.length === 0 ||
                                        inputFields.email.length === 0 ||
                                        inputFields.phone.length === 0 ||
                                        validHelperText.email.length !== 0 ||
                                        validHelperText.phone.length !== 0}>
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} style={{zIndex: 1302}}
                    fullScreen={matchesXS} PaperProps={{
                style: {
                    paddingTop: matchesXS ? '1em' : '5em',
                    paddingBottom: matchesXS ? '1em' : '5em',
                    paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em',
                    paddingRight: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em',
                }
            }}>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant='h4' align="center" gutterBottom>Confirm Message</Typography>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='name' fullWidth label='Name' value={inputFields.name}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='email' fullWidth error={validHelperText.email.length !== 0}
                                           helperText={validHelperText.email} label='Email' value={inputFields.email}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item style={{marginBottom: '0.5em'}}>
                                <TextField id='phone' fullWidth error={validHelperText.phone.length !== 0}
                                           helperText={validHelperText.phone} label='Phone' value={inputFields.phone}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item style={{maxWidth: '20em'}}>
                                <TextField InputProps={{disableUnderline: true}} className={classes.message}
                                           id='message'
                                           multiline fullWidth rows={10} value={inputFields.message}
                                           onChange={handleChange}/>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' direction={matchesSM ? "column" : "row"}
                              style={{marginTop: '2em'}}>
                            <Grid item>
                                <Button color='primary' style={{fontWeight: 300}}
                                        onClick={() => setOpen(false)}>Cancel</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.sendButton}
                                        variant='contained'
                                        type='submit'
                                        disabled={
                                            inputFields.name.length === 0 ||
                                            inputFields.message.length === 0 ||
                                            inputFields.email.length === 0 ||
                                            inputFields.phone.length === 0 ||
                                            validHelperText.email.length !== 0 ||
                                            validHelperText.phone.length !== 0}>
                                    {loading ? <CircularProgress size={30}/> : buttonContents}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message}
                      ContentProps={{ style: {backgroundColor: alert.backgroundColor} }}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      onClose={() => setAlert({...alert, open: false})}
                      autoHideDuration={4000}
            />
            <Grid item container direction={matchesMD ? 'column' : 'row'}
                  justify={matchesMD ? 'center' : undefined}
                  className={classes.background} alignItems='center' lg={8} xl={9}>
                <Grid item style={{marginLeft: matchesMD ? 0 : '3em', textAlign: matchesMD ? 'center' : 'inherit'}}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant='h2'>
                                Simple Software. <br/> Revolutionary Results.
                            </Typography>
                            <Typography variant='subtitle2' align={matchesMD ? "center" : undefined}
                                        style={{fontSize: '1.5rem'}}>
                                Take advantage of 21st Century
                            </Typography>
                            <Grid container item
                                  justify={matchesMD ? 'center' : undefined}
                            >
                                <Button variant='outlined' className={classes.learnButton} component={Link}
                                        onClick={() => setValue(2)} to='/revolution'>
                                    <span style={{marginRight: 5}}> Learn More </span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant='contained' className={classes.estimateButton} component={Link}
                            onClick={() => setValue(5)} to='/estimate'
                    >Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Contact;
