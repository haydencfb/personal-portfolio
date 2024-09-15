// CSS Imports
import classes from "../styles/header.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// React Hook Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// MUI Logo Imports
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// MUI Grid Imports
import Grid from '@mui/material/Grid2';

// MUI Nav Menu Imports
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

// Header Function
export default function Header(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            desktop: 1280,
            laptop: 1024,
            tablet: 640,
            mobile: 0,
          },
        },
      })}
    >
      <Grid 
      container 
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      >

        <Grid item size={{ mobile: 6, tablet: 6, laptop: 6}}>
          <IconButton
            // id="basic-button"
            sx={{
              color: `var(--secondary-green)`,
              padding: `25px`
            }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon fontSize="large"/>
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="/" className={`${classes.headerLink}`}>
                About
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="/Portfolio" className={`${classes.headerLink}`}>
                Portfolio
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="/Contact" className={`${classes.headerLink}`}>
                Contact
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="/Resume" className={`${classes.headerLink}`}>
                Resume
              </Link>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="https://github.com/haydencfb" className={`${classes.headerLink}`}>
                <GitHubIcon fontSize="large" />
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="https://www.linkedin.com/in/haydencfb/" className={`${classes.headerLink}`}>
                <LinkedInIcon fontSize="large" />
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="https://www.youtube.com/@haydencfb" className={`${classes.headerLink}`}>
                <YouTubeIcon fontSize="large" />
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
              <Link to="https://www.instagram.com/hayden.cfb/" className={`${classes.headerLink}`}>
                <InstagramIcon fontSize="large" />
              </Link>
            </MenuItem>

          </Menu>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}
