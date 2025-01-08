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
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
            backgroundColor: `var(--grey)`,
            height: `85px`,
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
                  size={{ 
                    mobile: 3,
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

                    <MenuItem sx={{justifyContent: "center"}}>
                      HFB+
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        About
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Portfolio" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Portfolio
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Contact" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Contact
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Resume" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Resume
                      </NavLink>
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
                    laptop: 3
                  }}
                  sx={{
                    padding: `25px`,
                  }}
                >
                    <NavLink to="/" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                      About
                    </NavLink>
                </Grid>

                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 3 
                  }}
                  sx={{
                    padding: `25px`
                  }}
                >
                    <NavLink to="/Portfolio" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                      Projects
                    </NavLink>
                </Grid>

                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 3
                  }}
                  sx={{
                    padding: `25px`
                  }}
                >
                    <NavLink to="/Contact" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                      Connect
                    </NavLink>
                </Grid>

                <Grid
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  size={{
                    laptop: 3
                  }}
                  sx={{
                    padding: `25px`
                  }}
                >
                    <NavLink to="/Resume" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                      Resume
                    </NavLink>
                </Grid>
              </>

            // In this case, the viewport is anything between mobile and laptop (650 - 1024px)
            ) : (
              <>                
                <Grid 
                  display='flex'
                  alignItems='center'
                  size={{ 
                    mobile: 3,
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

                    <MenuItem sx={{justifyContent: "center"}}>
                      HFB+
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        About
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Portfolio" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Portfolio
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Contact" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Contact
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{justifyContent: "center"}}>
                      <NavLink to="/Resume" className={({ isActive }) => 
                      isActive ? `${classes.headerLinkActive}` : `${classes.headerLink}`}
                      >
                        Resume
                      </NavLink>
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

                <Grid
                  display='flex'
                  justifyContent='end'
                  alignItems='center'  
                  size={{ 
                    tablet: 9, 
                    laptop: 4 
                  }}
                  sx={{
                    paddingRight: "25px"
                  }}
                >
                  <h2 className={`${classes.headerH2}`}>Hayden Fitzpatrick-Brintle</h2>
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
