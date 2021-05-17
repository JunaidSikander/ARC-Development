import React, {useState} from 'react';
import Lottie from 'react-lottie';
import {cloneDeep} from 'lodash';
import emailjs from "emailjs-com";
import {estimateStyle} from "styles"
import {
    airplane,
    android,
    backArrow,
    backArrowDisabled,
    bell,
    biometrics,
    camera,
    check,
    customized,
    data,
    forwardArrow,
    forwardArrowDisabled,
    globe,
    gps,
    info,
    iPhone,
    mobile,
    people,
    person,
    persons,
    software,
    upload,
    usersIcon,
    website
} from 'assets'
import {estimateAnimation} from 'animations'
//Material UI Components
import {
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    Grid,
    Hidden,
    IconButton,
    Snackbar,
    TextField,
    Typography,
    useMediaQuery
} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "outlines of phones and tablets",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    }
];

const softwareQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: false,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "outlines of phones and tablets",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 1000
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iPhone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 1000
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 1000
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 250
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 250
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 250
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: usersIcon,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 250
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 250
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 250
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 250
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 500
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 1000
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.125
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.25
            }
        ],
        active: false
    }
];

const websiteQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: false,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "outlines of phones and tablets",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 1000
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 2000
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 2500
            }
        ],
        active: true
    }
];

const Estimate = () => {
    const classes = estimateStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [inputFields, setInputFields] = useState({name: '', email: '', phone: '', message: ''});
    const [validHelperText, setValidHelperText] = useState({email: '', phone: ''});
    const [total, setTotal] = useState(0);
    const [service, setService] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState("");
    const [users, setUsers] = useState("");
    const [category, setCategory] = useState("");

    const [alert, setAlert] = useState({open: false, color: ""});
    const [alertMessage, setAlertMesssage] = useState("");

    const [loading, setLoading] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

        setQuestions(newQuestions);

    };

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex - 1;

        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

        setQuestions(newQuestions);

    };

    const backButtonDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);
        return currentlyActive[0].id === 1;
    };

    const forwardButtonDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);
        return currentlyActive[0].id === questions[questions.length - 1].id;
    };

    const estimateDisabled = () => {
        let disabled = true;

        const emptySelections = questions
            .map(question => question.options.filter(option => option.selected))
            .filter(question => question.length === 0);

        if (questions.length === 2) {
            if (emptySelections.length === 1) {
                return false;
            }
        } else if (questions.length === 1) {
            return true;
        } else {
            if (
                emptySelections.length < 3 &&
                questions[questions.length - 1].options.filter(
                    option => option.selected
                ).length > 0
            ) {
                return false;
            }
        }

        return disabled;
    };

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(option => option.selected);

        switch (currentlyActive[0].subtitle) {
            case "Select one.":
                if (previousSelected[0]) previousSelected[0].selected = !previousSelected[0].selected;
                newSelected.selected = !newSelected.selected;
                break;
            default:
                newSelected.selected = !newSelected.selected;
                break;
        }
        switch (newSelected.title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                break;
            case 'iOS/Android App Development':
                setQuestions(softwareQuestions);
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                break;
            default:
                setQuestions(newQuestions);
                break;
        }
    };

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

    const getTotal = () => {
        let cost = 0;

        const selections = questions
            .map(question => question.options.filter(option => option.selected))
            .filter(question => question.length > 0);

        selections.map(options => options.map(option => (cost += option.cost)));

        if (questions.length > 2) {
            const userCost = questions
                .filter(question => question.title === "How many users do you expect?")
                .map(question =>
                    question.options.filter(option => option.selected)
                )[0][0];

            setUsers(userCost.title);

            cost -= userCost.cost;
            cost *= userCost.cost;
        }

        setTotal(cost);
    };

    const getPlatforms = () => {
        if (questions.length > 2) {
            let newPlatforms = [];

            questions
                .filter(
                    question =>
                        question.title === "Which platforms do you need supported?"
                )
                .map(question => question.options.filter(option => option.selected))[0]
                .map(option => newPlatforms.push(option.title));

            setPlatforms(newPlatforms);
        }
    };

    const getFeatures = () => {
        if (questions.length > 2) {
            let newFeatures = [];

            questions
                .filter(
                    question => question.title === "Which features do you expect to use?"
                )
                .map(question => question.options.filter(option => option.selected))
                .map(option =>
                    option.map(newFeature => newFeatures.push(newFeature.title))
                );

            setFeatures(newFeatures);
        }
    };

    const getCustomFeatures = () => {
        if (questions.length > 2) {
            const newCustomFeatures = questions
                .filter(
                    question =>
                        question.title ===
                        "What type of custom features do you expect to need?"
                )
                .map(question =>
                    question.options.filter(option => option.selected)
                )[0][0].title;

            setCustomFeatures(newCustomFeatures);
        }
    };

    const getCategory = () => {
        if (questions.length === 2) {
            const newCategory = questions
                .filter(
                    question =>
                        question.title === "Which type of website are you wanting?"
                )[0]
                .options.filter(option => option.selected)[0].title;

            setCategory(newCategory);
        }
    };

    const sendEstimate = () => {
        setLoading(true);
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
                ...inputFields,
                total,
                category,
                service,
                platforms,
                features,
                customFeatures,
                users
            },
            process.env.REACT_APP_USER_ID)
            .then((response) => {
                setLoading(false);
                setAlert({open: true, color: "#4BB543"});
                setAlertMesssage("Message sent successfully!");
                setDialogOpen(false);
            })
            .catch((error) => {
                setLoading(false);
                setAlert({open: true, color: "#FF3232"});
                setAlertMesssage("Something went wrong! Please try again.");
                console.error(error);
            })
    };

    const softwareSelections = (
        <Grid container direction="column">
            <Grid
                item
                container
                alignItems="center"
                style={{marginBottom: "1.25em"}}
            >
                <Grid item xs={2}>
                    <img src={check} alt="checkmark"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {`You want ${service} `}
                        {platforms.length > 0
                            ? `for ${
                                //if only web application is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 1
                                    ? //then finish sentence here
                                    "a Web Application."
                                    : //otherwise, if web application and another platform is selected...
                                    platforms.indexOf("Web Application") > -1 &&
                                    platforms.length === 2
                                        ? //then finish the sentence here
                                        `a Web Application and an ${platforms[1]}.`
                                        : //otherwise, if only one platform is selected which isn't web application...
                                        platforms.length === 1
                                            ? //then finish the sentence here
                                            `an ${platforms[0]}`
                                            : //otherwise, if other two options are selected...
                                            platforms.length === 2
                                                ? //then finish the sentence here
                                                "an iOS Application and an Android Application."
                                                : //otherwise if all three are selected...
                                                platforms.length === 3
                                                    ? //then finish the sentence here
                                                    "a Web Application, an iOS Application, and an Android Application."
                                                    : null
                            }`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems="center"
                style={{marginBottom: "1.25em"}}
            >
                <Grid item xs={2}>
                    <img src={check} alt="checkmark"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                            ? //...and there's only 1...
                            features.length === 1
                                ? //then end the sentence here
                                `${features[0]}.`
                                : //otherwise, if there are two features...
                                features.length === 2
                                    ? //...then end the sentence here
                                    `${features[0]} and ${features[1]}.`
                                    : //otherwise, if there are three or more features...
                                    features
                                    //filter out the very last feature...
                                        .filter((feature, index) => index !== features.length - 1)
                                        //and for those features return their name...
                                        .map((feature, index) => (
                                            <span key={index}>{`${feature}, `}</span>
                                        ))
                            : null}
                        {features.length > 0 &&
                        features.length !== 1 &&
                        features.length !== 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src={check} alt="checkmark"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {`The custom features will be of ${customFeatures.toLowerCase()}, and the project will be used by about ${users} users.`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

    const websiteSelections = (
        <Grid container direction="column" style={{marginTop: "14em"}}>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src={check} alt="checkmark"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {`You want `}
                        {category === "Basic"
                            ? "a Basic Website."
                            : `an ${category} Website.`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <Grid container direction="row">
            <Grid
                item
                container
                direction="column"
                lg
                alignItems={matchesMD ? "center" : undefined}
            >
                <Grid
                    item
                    style={{marginTop: "2em", marginLeft: matchesMD ? 0 : "5em"}}
                >
                    <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                        Estimate
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        marginRight: matchesMD ? 0 : "10em",
                        maxWidth: "50em",
                        marginTop: "7.5em"
                    }}
                >
                    <Lottie
                        options={defaultOptions}
                        isStopped
                        height="100%"
                        width="100%"
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="column"
                alignItems="center"
                lg
                style={{marginRight: matchesMD ? 0 : "2em", marginBottom: "25em"}}
            >
                {questions
                    .filter(question => question.active)
                    .map((question, index) => (
                        <React.Fragment key={index}>
                            <Grid item>
                                <Typography
                                    align="center"
                                    variant="h2"
                                    style={{
                                        fontWeight: 500,
                                        fontSize: "2.25rem",
                                        marginTop: "5em",
                                        lineHeight: 1.25,
                                        marginLeft: matchesSM ? "1em" : 0,
                                        marginRight: matchesSM ? "1em" : 0
                                    }}
                                >
                                    {question.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    style={{marginBottom: "2.5em"}}
                                    gutterBottom
                                >
                                    {question.subtitle}
                                </Typography>
                            </Grid>
                            <Grid item container>
                                {question.options.map((option, index) => (
                                    <Grid
                                        key={index}
                                        item
                                        container
                                        component={Button}
                                        onClick={() => handleSelect(option.id)}
                                        style={{
                                            display: "block",
                                            textTransform: "none",
                                            borderRadius: 0,
                                            marginBottom: matchesSM ? "1.5em" : 0,
                                            backgroundColor: option.selected
                                                ? theme.palette.common.orange
                                                : undefined
                                        }}
                                        direction="column"
                                        alignItems="center"
                                        md
                                    >
                                        <Grid item style={{maxWidth: "14em"}}>
                                            <Typography
                                                align="center"
                                                variant="h6"
                                                style={{
                                                    lineHeight: 1,
                                                    marginBottom: "1em"
                                                }}
                                            >
                                                {option.title}
                                            </Typography>
                                            <Typography align="center" variant="caption">
                                                {option.subtitle}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <img
                                                src={option.icon}
                                                alt={option.iconAlt}
                                                className={classes.icon}
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </React.Fragment>
                    ))}
                <Grid
                    item
                    container
                    justify="space-between"
                    style={{width: "18em", marginTop: "3em"}}
                >
                    <Grid item>
                        <IconButton
                            disabled={backButtonDisabled()}
                            onClick={previousQuestion}
                        >
                            <img
                                src={backButtonDisabled() ? backArrowDisabled : backArrow}
                                alt="Previous question"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            disabled={forwardButtonDisabled()}
                            onClick={nextQuestion}
                        >
                            <img
                                src={
                                    forwardButtonDisabled() ? forwardArrowDisabled : forwardArrow
                                }
                                alt="Next question"
                            />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        disabled={estimateDisabled()}
                        className={classes.estimateButton}
                        onClick={() => {
                            setDialogOpen(true);
                            getTotal();
                            getPlatforms();
                            getFeatures();
                            getCustomFeatures();
                            getCategory();
                        }}
                    >
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                fullWidth
                maxWidth="lg"
                style={{zIndex: 1302}}
                fullScreen={matchesSM}
            >
                <Grid container justify="center">
                    <Grid item style={{marginTop: "1em"}}>
                        <Typography variant="h2" align="center">
                            Estimate
                        </Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <Grid
                        container
                        justify="space-around"
                        direction={matchesSM ? "column" : "row"}
                        alignItems={matchesSM ? "center" : undefined}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            md={7}
                            style={{maxWidth: "20em"}}
                        >
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
                            <Grid item>
                                <TextField InputProps={{disableUnderline: true}} className={classes.message}
                                           id='message'
                                           multiline fullWidth rows={10} value={inputFields.message}
                                           onChange={handleChange}/>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align={matchesSM ? "center" : undefined}
                                    style={{lineHeight: 1.1}}
                                >
                                    We can create this digital solution for an estimated{" "}
                                    <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    align={matchesSM ? "center" : undefined}
                                >
                                    Fill out your name, number, and email, place your request, and
                                    we’ll get back to you with details moving forward and a final
                                    price.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            md={5}
                            style={{maxWidth: "30em"}}
                            alignItems={matchesSM ? "center" : undefined}
                        >
                            <Hidden smDown>
                                <Grid item>
                                    {questions.length > 2
                                        ? softwareSelections
                                        : websiteSelections}
                                </Grid>
                            </Hidden>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    className={classes.estimateButton}
                                    onClick={sendEstimate}
                                    disabled={
                                        inputFields.name.length === 0 ||
                                        inputFields.message.length === 0 ||
                                        validHelperText.email.length !== 0 ||
                                        validHelperText.phone.length !== 0}>
                                    {loading ? (
                                        <CircularProgress/>
                                    ) : (
                                        <React.Fragment>
                                            Place Request
                                            <img
                                                src={airplane}
                                                alt="paper airplane"
                                                style={{marginLeft: "0.5em"}}
                                            />
                                        </React.Fragment>
                                    )}
                                </Button>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item style={{marginBottom: matchesSM ? "5em" : 0}}>
                                    <Button
                                        style={{fontWeight: 300}}
                                        color="primary"
                                        onClick={() => setDialogOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                ContentProps={{
                    style: {
                        backgroundColor: alert.color
                    }
                }}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                message={alertMessage}
                autoHideDuration={4000}
                onClose={() => setAlert(false)}
            />
        </Grid>
    );
};

export default Estimate
