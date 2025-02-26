// Import React Hooks
import * as React from 'react';
import { Link } from "react-router-dom";

// Import CSS Hooks
import classes from "./footer.module.css";

// Import MUI Material Hooks
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles'

// Import MUI Icon Hooks
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {

    // Creating the variable to hold the viewports for the returns 
    const theme=createTheme({
        breakpoints: { 
        values: { 
            mobile: 0,
            tablet: 426,
            laptop: 768
            },
        },
    });

    return (
        <>
            <ThemeProvider
                theme={createTheme({
                breakpoints: {
                    values: {
                    mobile: 0,
                    tablet: 426,
                    laptop: 768
                    }
                }
            })}>
                <footer className={`${classes.footer}`}>

                        <Grid 
                            container
                            direction="row"
                            aligns="center"
                            alignItems="center"
                            justifyContent="center"
                        >

                            <Grid
                                size={{
                                    mobile: 12,
                                    tablet: 12,
                                    laptop: 12
                                }}
                            >
                                <p>© 2024 - Hayden Fitzpatrick-Brintle</p>
                            </Grid> 

                            {/* <Grid
                                size={{
                                    mobile: 1,
                                    tablet: 1,
                                    laptop: 1
                                }}
                            >
                                <Link to="https://github.com/haydencfb" className={`${classes.footerButton}`}>
                                    <GitHubIcon fontSize="large" />
                                </Link>
                            </Grid> */}

                            {/* <Grid
                                size={{
                                    mobile: 1,
                                    tablet: 1,
                                    laptop: 1
                                }}
                            >
                                <Link to="https://www.linkedin.com/in/haydencfb/" className={`${classes.footerButton}`}>
                                    <LinkedInIcon fontSize="large" />
                                </Link>
                            </Grid> */}

                            {/* <Grid
                                size={{
                                    mobile: 1,
                                    tablet: 1,
                                    laptop: 1
                                }}
                            >
                                <Link to="https://www.youtube.com/@haydencfb" className={`${classes.footerButton}`}>
                                    <YouTubeIcon fontSize="large" />
                                </Link>
                            </Grid> */}

                            {/* <Grid
                                size={{
                                    mobile: 1,
                                    tablet: 1,
                                    laptop: 1
                                }}
                            >
                                <Link to="https://www.instagram.com/hayden.cfb/" className={`${classes.footerButton}`}>
                                    <InstagramIcon fontSize="large" />
                                </Link>
                            </Grid> */}

                        </Grid>
                </footer>
            </ThemeProvider>
        </>
    ); 
}

export default Footer;