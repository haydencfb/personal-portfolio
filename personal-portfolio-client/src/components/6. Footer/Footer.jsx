import classes from "../6. Footer/footer.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            {/* <Paper variant={elevation}> */}
                <footer className={`${classes.footerP}`}>
                    <p>© 2024 - Hayden Fitzpatrick-Brintle</p>

                    <Link to="https://github.com/haydencfb">
                        <GitHubIcon fontSize="large" />
                    </Link>

                    <Link to="https://www.linkedin.com/in/haydencfb/">
                        <LinkedInIcon fontSize="large" />
                    </Link>

                    <Link to="https://www.youtube.com/@haydencfb">
                        <YouTubeIcon fontSize="large" />
                    </Link>

                    <Link to="https://www.instagram.com/hayden.cfb/">
                        <InstagramIcon fontSize="large" />
                    </Link>
                </footer>
            {/* </Paper> */}
        </>
    ); 
}

export default Footer;