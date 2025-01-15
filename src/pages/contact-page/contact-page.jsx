// Import React Hooks
import { useState } from "react";

// Import MUI Material Hooks
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';


// Import Image Hooks
import uziLogo from "../../assets/profilePic.jpg";

export default function Contact() {

const isMobile = useMediaQuery(`(max-width: 435px)`);

const [formState, setFormState] = useState({
    yourName: "",
    company: "",
    email: "",
    message: "",
});

const [userMessage, setUserMessage] = useState("");
const [valid, setValid] = useState(false);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const handleChange = (e) => {
    setFormState({
    ...formState,
    [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
        setUserMessage('Email is invalid');
        setTimeout(() => {
            setUserMessage("");
            }, 3000);
        return;
    } 

    setUserMessage("Your message has been sent!");
    setFormState({
    yourName: "",
    company: "",
    email: "",
    message: "",
    });
    setTimeout(() => {
    setUserMessage("");
    }, 3000);
};

return (
    <>
        <Grid
            container 
            direction="row"
            spacing={2}
            aligns="center"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: "5rem",
                // width: "100%",
            }}
        >
{/* 
            {isMobile === true ? (
                <Grid
                    display='flex'
                    flexDirection='column'
                    alignItems='center'  
                    justifyContent='center'
                    size={{ 
                        mobile: 12
                    }}
                    sx={{
                        color: "var(--accent-color)"
                    }}
                >
                    <h1>
                        CONTACT
                    </h1>
                </Grid>
            ) : (
                <Grid
                    display='flex'
                    flexDirection='row'
                    alignItems='start'  
                    justifyContent='start'
                    size={{ 
                        tablet: 1,
                        laptop: 1
                    }}
                    sx={{
                        color: "var(--accent-color)"
                    }}
                >
                    <h1>
                        C<br/>
                        O<br/>
                        N<br/>
                        T<br/>
                        A<br/>
                        C<br/>
                        T<br/>
                    </h1>
                </Grid>
            )} */}

            <Grid
                display='flex'
                flexDirection='column'
                alignItems='center'  
                justifyContent='center'
                size={{ 
                    mobile: 12,
                    tablet: 11,
                    laptop: 11
                }}
            >
                <Avatar 
                    src={uziLogo} 
                    sx={{ 
                        m: 1, 
                        bgcolor: "secondary.main" 
                    }}
                />
                <Typography 
                    component="h1" 
                    variant="h5" 
                    sx={{ 
                        color: "var(--accent-color)",
                    }}
                >
                    I&apos;d love to hear from you!
                </Typography>
                <Box 
                    component="form" 
                    onSubmit={handleSubmit} 
                    sx={{ 
                        mt: 3 
                    }}
                >
                <Grid 
                    container 
                    spacing={2}
                >
                    <Grid 
                    size={{
                        xs: 12}}
                    sx={{
                        backgroundColor: "var(--accent-color)",
                    }}
                    >
                        <TextField
                            autoComplete="given-name"
                            name="yourName"
                            value={formState.yourName}
                            onChange={handleChange}
                            required
                            fullWidth
                            id="yourName"
                            label="Your Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid size={{xs: 12}}
                    sx={{
                        backgroundColor: "var(--accent-color)",
                    }}>
                        <TextField
                            fullWidth
                            id="company"
                            label="Company (optional)"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            autoComplete="company"
                        />
                    </Grid>
                    <Grid size={{xs: 12}}
                    sx={{
                        backgroundColor: "var(--accent-color)",
                    }}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid size={{xs: 12}}
                    sx={{
                        backgroundColor: "var(--accent-color)",
                    }}>
                        <TextField
                            required
                            fullWidth
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            label="Your Message"
                            type="text"
                            multiline
                            minRows={4}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: 'var(--accent-color)',
                    // example of using pseudo classes inside the sx prop:
                    "&:hover": { backgroundColor: "green" },
                    }}
                >
                    Submit
                </Button>
                </Box>
                {userMessage && (
                <Typography
                // example of conditional styles using sx prop:
                    sx={{
                    color: "green",  // default text color
                    ...(!valid && {
                        color: "red",  // color is red if form is not valid
                    }),
                    }}
                >
                    {userMessage}
                </Typography>
                )}
            </Grid>
        </Grid>
    </>
);
}