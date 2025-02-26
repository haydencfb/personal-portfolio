// Import React Hooks
import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import CSS Hooks
import classes from "./header.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import MUI Material Hooks

  // MUI Grid Imports
  import Grid from '@mui/material/Grid2';
  import Box from '@mui/material/Box';

  // MUI Nav Menu Imports
  import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import Divider from '@mui/material/Divider';
  import AppBar from '@mui/material/AppBar';
  import Tooltip from '@mui/material/Tooltip';

// Import MUI Icon Hooks
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// Header Function
export default function Header(props) {

  // Creating the variable to hold the viewports for the returns 
  const theme=createTheme({
    breakpoints: { 
      values: { 
        mobile: 0,
        tablet: 436,
        laptop: 768
        },
    },
  });

  // Creating the variables that allow for the media queries to operate properly in the ternary argument
  const isMobile = useMediaQuery(`(max-width: 435px)`)
  const isLaptop = useMediaQuery(`(min-width: 768px)`)

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
              tablet: 436,
              laptop: 768
            }
          }
      })}>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <AppBar 
          position="static"
          sx={{
            backgroundColor: `var(--black)`,
            height: `100px`,
            width: `90%`,
            borderRadius: `0px 0px 15px 15px`,
          }}>
            <Grid 
            container 
            direction="row"
            spacing={2}
            aligns="center"
            >

            {/* This Ternary Operator Identifies whether or not the viewport is set to mobile or desktop */}
            {/* In this case, the view port is mobile */}
            {isMobile === true ? (

              <>
                <Grid
                  display='flex'
                  alignItems='center'  
                  justifyContent='start'
                  size={{ 
                    mobile: 12,
                  }}
                  sx={{
                    height: '100px'
                  }}
                >
                  <Tooltip title="Open Menu">
                    <IconButton
                      sx={{
                        color: `var(--accent-color)`,
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

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#about" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        ABOUT
                      </a>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#projects" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        PROJECTS
                      </a>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#connect" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        CONNECT
                      </a>
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
                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 4
                  }}
                  sx={{
                    padding: `25px`,
                  }}
                >
                  <a 
                    href="#about" 
                    className={classes.headerLinkDesktop}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    ABOUT
                  </a>
                </Grid>

                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 4 
                  }}
                  sx={{
                    padding: `25px`
                  }}
                >
                  <a 
                    href="#projects" 
                    className={classes.headerLinkDesktop}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    PROJECTS
                  </a>
                </Grid>

                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 4
                  }}
                  sx={{
                    padding: `25px`
                  }}
                >
                  <a 
                    href="#connect" 
                    className={classes.headerLinkDesktop}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    CONNECT
                  </a>
                </Grid>
              </>

            // In this case, the viewport is anything between mobile and laptop (650 - 1024px)
            ) : (
              <>                
                <Grid 
                  display='flex'
                  alignItems='center'  
                  justifyContent='start'
                  size={{ 
                    mobile: 12,
                  }}
                  sx={{
                    height: '100px'
                  }}
                >
                  <Tooltip title="Open Menu">
                    <IconButton
                      sx={{
                        color: `var(--accent-color)`,
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

<MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#about" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        ABOUT
                      </a>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#projects" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        PROJECTS
                      </a>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <a 
                        href="#connect" 
                        className={classes.headerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        CONNECT
                      </a>
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

            )}
            </Grid>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}
