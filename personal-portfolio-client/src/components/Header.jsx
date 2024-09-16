// CSS Imports
import classes from "../styles/header.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';


// React Hook Imports
import * as React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


// MUI Logo Imports
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

// MUI Grid Imports
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

// MUI Nav Menu Imports
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

// Header Function
export default function Header(props) {

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

  // Creating the variables that allow for the media queries to operate properly in the ternary argument
  const isMobile = useMediaQuery(`(max-width: 426px)`)
  const isLaptop = useMediaQuery(`(min-width: 769px)`)

  // Consts that allow for the menus to work
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Overall Return
  return (  
    
    // ThemeProvider, AppBar, and the Grid Container will always render, regardless of the viewport size
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
        <AppBar 
        position="fixed"
        sx={{
          backgroundColor: `var(--secondary-grey)`,
          height: `75px`
        }}>
          <Grid 
          container 
          direction="row"
          spacing={2}
          alignItems="center"
          >

          {/* This Ternary Operator Identifies whether or not the viewport is set to mobile or desktop */}
          {/* In this case, the view port is mobile */}
          {isMobile === true ? (

            <>
              <Grid item 
                size={{ 
                  mobile: 3,
                }}
              >
                <Tooltip title="Open Menu">
                  <IconButton
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
                </Tooltip>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >

                  <MenuItem sx={{justifyContent: "center"}}>
                    HFB+
                  </MenuItem>

                  <Divider />

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
            </>

          // In this case, the viewport is anything above laptop (1024px)
          ) : isLaptop === true ? (
            <>
              <Grid item  
                size={{ 
                  tablet: 4, 
                  laptop: 4 
                }}
                sx={{
                  textAlign: "start",
                  paddingLeft: "25px"
                }}
              >
                <h2 className={`${classes.headerH1}`}>Hayden Fitzpatrick-Brintle</h2>
              </Grid>
                
              <Grid item
                size={{
                  tablet: 8, 
                  laptop: 8 
                }}
                sx={{
                  textAlign: "end",
                  paddingRight: "25px",
                }}
              >
                  <Link to="/" className={`${classes.headerLink}`}>
                    About
                  </Link>
                  <Link to="/Portfolio" className={`${classes.headerLink}`}>
                    Portfolio
                  </Link>
                  <Link to="/Contact" className={`${classes.headerLink}`}>
                    Contact
                  </Link>
                  <Link to="/Resume" className={`${classes.headerLink}`}>
                    Resume
                  </Link>

                  <IconButton
                    sx={{
                      color: `var(--secondary-green)`,
                      padding: `25px`
                    }}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={`${classes.headerLink}`}
                  >
                    <ConnectWithoutContactIcon fontSize="large"/>
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
            </>

          // In this case, the viewport is anything between mobile and laptop (650 - 1024px)
          ) : (

            <>                
              <Grid item 
                size={{ 
                  mobile: 3,
                }}
              >
                <Tooltip title="Open Menu">
                  <IconButton
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
                </Tooltip>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >

                  <MenuItem sx={{justifyContent: "center"}}>
                    HFB+
                  </MenuItem>

                  <Divider />

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

              <Grid item  
                size={{ 
                  tablet: 9, 
                  laptop: 4 
                }}
                sx={{
                  textAlign: "end",
                  paddingRight: "25px"
                }}
              >
                <h2 className={`${classes.headerH1}`}>Hayden Fitzpatrick-Brintle</h2>
              </Grid>
            </>

          )}
          </Grid>

          

        </AppBar>

      <Box sx={{ paddingTop: '75px' }}></Box>
      </ThemeProvider>
    </>
  );
}
