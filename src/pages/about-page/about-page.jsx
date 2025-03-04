// Import React Hooks
import * as React from 'react';
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import CSS Hooks
import classes from "../about-page/about.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import MUI Material Hooks
  // MUI Grid Imports
  import Grid from '@mui/material/Grid2';
  import Button from '@mui/material/Button';

// Import Image Hooks
import uziLogo from "../../assets/profilePic.jpg"

// Import Icons
import { FaPython } from "react-icons/fa";

// Import Components
import Skills from "../../components/skills-comp/skills-comp";
import skillsFiles from "../../utils/skill-files.json";

import myResume from "../../assets/haydenResume.png";

function About() {

  const handleDownload = async () => {
    
            try {
                const response = await fetch(myResume);
                const blob = await response.blob();
                const fileURL = URL.createObjectURL(blob);
                open(fileURL, '_blank')
                const aLink = document.createElement('a');
                aLink.href = fileURL;
                aLink.download = `Hayden_Fitzpatrick-Brintle_Resume.pdf`;
                aLink.click();
            }
            catch (error) {
                console.error(error);
            }
        }

  // Creating the variable to hold the viewports for the returns 
  const theme=createTheme({
    breakpoints: { 
      values: { 
        desktop: 1280,
        laptop: 1024,
        tablet: 640,
        mobile: 0,
        },
    },
  });

  // Creating the variables that allow for the media queries to operate properly in the ternary argument
  const isMobile = useMediaQuery(`(max-width: 650px)`)
  const isLaptop = useMediaQuery(`(max-width: 1350px)`)

  // Overall Return
  return (

  // ThemeProvider, AppBar, and the Grid Container will always render, regardless of the viewport size
  <div id='about'>
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1350,
            tablet: 650,
            mobile: 0,
          },
        },
        palette: {
          primary: {
              main: "#00FF08",
          },
          secondary: {
              main: "#508991",
          },
          success: {
              main: "#004346",
          },
          info: {
              main: "#81717A",
          },
      }
      })}
    >

      <Grid 
      container 
      direction="row"
      spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >

        {isMobile === true ? (
          <>
            <Grid
              display='flex'
              flexDirection='column'
              alignItems='center'  
              size={{ 
                mobile: 12
              }}
              sx={{
                // paddingRight: "50px"
              }}
            >
              <h1 className={`${classes.nameH1}`}>Hayden Fitzpatrick-Brintle</h1>
              <h2 className={`${classes.webDevH1}`}>Fullstack Developer</h2>
              <p className={`${classes.paragraph}`}>Fullstack Software Dev. JavaScript, React UX/UI, Relational Databases. Recognized for excellence as Employee of the Month, top university graduate, and high school salutatorian, with early leadership experience.</p>
              <Button component={Link} to="https://www.linkedin.com/in/haydencfb/" variant='contained' color='primary' sx={{
                marginTop: "10px",
                width: "100%",
                boxShadow: "0px 0px 15px #00FF08"
              }}>Let's Connect!</Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              display='flex'
              flexDirection='column'
              alignItems='start'  
              size={{ 
                tablet: 6, 
                laptop: 6 
              }}
              sx={{
                paddingRight: "50px"
              }}
            >
              <h1 className={`${classes.nameH1}`}>Hayden Fitzpatrick-Brintle</h1>
              <h2 className={`${classes.webDevH1}`}>Fullstack Developer</h2>
              <p className={`${classes.paragraph}`}>Fullstack Software Dev. JavaScript, React UX/UI, Relational Databases. Recognized for excellence as Employee of the Month, top university graduate, and high school salutatorian, with early leadership experience.</p>
              <Button component={Link} to="https://www.linkedin.com/in/haydencfb/" variant='contained' color='primary' 
                            sx={{
                              marginTop: "10px",
                              width: "100%",
                              boxShadow: "0px 0px 15px #00FF08"
                            }}>Let's Connect!</Button>

            </Grid>
          </>
        )}

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'

          size={{ 
            mobile: 12, 
            tablet: 6, 
            laptop: 6 
          }}
        >
          <img src={uziLogo} alt="Profile Logo" className={`${classes.aboutLogo}`}/>
        </Grid>
      </Grid>

        {/* <Grid
          display='flex'
          flexDirection='row'
          alignItems='center' 
          justifyContent='center' 
          size={{ 
              mobile: 12, 
              tablet: 12, 
              laptop: 12 
          }}
        >
          <Grid 
              container 
              direction="row"
              spacing={2}
              aligns="center"
              justifyContent="center"
          >
            {skillsFiles.map(skill => (
              <Skills skill={skill} />
            ))}
        </Grid>
      </Grid> */}
    </ThemeProvider>
    </div>
  );
}

export default About;
