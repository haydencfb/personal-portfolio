// CSS Imports
import classes from "../styles/main.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Image Imports
import profileLogo from "../assets/uzime.jpg";

// React Hook Imports
import { Link } from "react-router-dom";
import { useState } from "react";

// MUI Imports
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid2';
function About() {
  return (

    <Grid 
    container 
    direction="row"
    spacing={2}
    sx={{
      justifyContent: "space-evenly",
      alignItems: "center",
    }}
    >

    <Grid item size={{ xs: 12}}>
      <h2 className={`${classes.headerH1}`}>Hayden Fitzatrick-Brintle</h2>
    </Grid>

    <Grid item size={{ xs: 12}}>
      <h1 className={`${classes.headerH1}`}>Web+ Developer, Photographer/Videographer</h1>
    </Grid>

    <Grid item size={{ xs: 12}}>
      <img src={profileLogo} alt="Profile Logo" className={`${classes.headerImg}`}/>
    </Grid>

    <div className={`${classes.div}`}>
      <h1 className={`${classes.aboutH1}`}>About</h1>
      <p className={`${classes.aboutP}`}>
        With a background that is full of communication and seeking improvement,
        paired with my engaging personality, I am proficient in collaborative
        environments. As someone who has working in fast-paced environments, I
        am able to work efficientely with my time. This being said, a timely
        manner does not lack organization and quality of work, as I am someone
        who takes pride in any project that I complete.
      </p>
      <h1 className={`${classes.aboutH1}`}>Skills</h1>
      <p className={`${classes.aboutP}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        aliquam odio reprehenderit? Repellat voluptate sunt praesentium
        consequuntur officia fuga delectus dolor deleniti libero amet, ipsum
        ratione quo id accusamus rerum.
      </p>
      <h1 className={`${classes.aboutH1}`}>Background</h1>
      <p className={`${classes.aboutP}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        enim architecto minima quisquam, quibusdam doloremque omnis incidunt
        alias velit rerum, quae minus, magni quia nihil quos? Neque voluptatum
        reiciendis eligendi?
      </p>
    </div>

    </Grid>
  );
}

export default About;
