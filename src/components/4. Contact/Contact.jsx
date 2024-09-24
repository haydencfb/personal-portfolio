
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import uziLogo from "../../assets/uzime.jpg";
import classes from "../4. Contact/contact.module.css"

export default function Contact() {
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
    <Box
    style={{
        //example of using a style object, able to use this in any react component.
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: 10,
        height: "100vh",
        width: "100%",
    }}
    >
    <Box className="name"
        sx={{
        backgroundColor: "var(--grey)",
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 10,
        // example of media queries inside the sx prop:
        width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
        }}
    >
        <Avatar src={uziLogo} sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "black" }}>
        I&apos;d love to hear from you!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
            <Grid size={{xs: 12}}>
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
            <Grid size={{xs: 12}}>
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
            <Grid size={{xs: 12}}>
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
            <Grid size={{xs: 12}}>
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
            "&:hover": { backgroundColor: "var(--terciary-color)" },
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
    </Box>
    </Box>
);
}