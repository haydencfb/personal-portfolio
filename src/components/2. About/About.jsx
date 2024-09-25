// CSS Imports
import classes from "../2. About/about.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Image Imports
import htmlLogo from "../../assets/htmlLogo2.png";
import cssLogo from "../../assets/cssLogo.png";
import jsLogo from "../../assets/jsLogo.webp";
import tsLogo from "../../assets/tsLogo.png";
import reactLogo from "../../assets/reactLogo.webp";
import nodejsLogo from "../../assets/nodejsLogo.png";
import gitLogo from "../../assets/gitLogo.png";
import muiLogo from "../../assets/muiLogo.png";
import uziLogo from "../../assets/uzime.jpg"


// React Hook Imports
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// MUI Logo Imports

// MUI Grid Imports
import Grid from '@mui/material/Grid2';

function About() {

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
  <>
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1350,
            tablet: 650,
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
          justifyContent: "center",
          alignItems: "center",
          padding: "10px"
        }}
      >

        <Grid  
          size={{ 
            mobile: 12, 
            tablet: 6, 
            laptop: 6 
          }}
          sx={{
            textAlign: "flex-start",
          }}
        >
          <h2 className={`${classes.nameH2}`}>Hayden Fitzpatrick-Brintle</h2>
          <h1 className={`${classes.webDevH1}`}>Web +</h1>
          <h1 className={`${classes.webDevH1}`}>Developer</h1>
        </Grid>

        <Grid
        size={{ 
          mobile: 12, 
          tablet: 6, 
          laptop: 6 
        }}
        sx={{
          textAlign: "end",
        }}>
          <img src={uziLogo} alt="Profile Logo" className={`${classes.aboutLogo}`}/>
        </Grid>
      </Grid>

      <Grid 
      container 
      direction="row"
      spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid 
            size={{
              mobile: 12,
              table: 12,
              laptop: 12
            }}
            sx={{
              textAlign: "center",
              backgroundColor: "var(--grey)",
              borderRadius: "5px"
            }}
          >
            <h1 className={`${classes.aboutH1}`}>About</h1>
            <p className={`${classes.paragraph}`}>
            With a background that is full of communication and seeking improvement,
            paired with my engaging personality, I am proficient in collaborative
            environments. As someone who has working in fast-paced environments, I
            am able to work efficientely with my time. This being said, a timely
            manner does not lack organization and quality of work, as I am someone
            who takes pride in any project that I complete.
          </p>
          </Grid>

          <Grid 
            size={{
              mobile: 12,
              table: 12,
              laptop: 12
            }}
            sx={{
              textAlign: "center",
              backgroundColor: "var(--grey)",
              borderRadius: "5px"
            }}
          >
            <h1 className={`${classes.aboutH1}`}>Skills</h1>
            <p className={`${classes.paragraph}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam odio reprehenderit? Repellat voluptate sunt praesentium
            consequuntur officia fuga delectus dolor deleniti libero amet, ipsum
            ratione quo id accusamus rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiisaliquam odio reprehenderit? Repellat voluptate sunt praesentium
            consequuntur officia fuga delectus dolor deleniti libero amet, ipsum
            ratione quo id accusamus rerum. 
          </p>
          </Grid>


          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
              <img src={htmlLogo} alt="HTML Logo" className={`${classes.aboutImg}`} />
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={cssLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={jsLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={tsLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={reactLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={nodejsLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={gitLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{ 
              mobile: 6, 
              tablet: 3, 
              laptop: 1.5 
            }}
            sx={{textAlign: "center"}}
          >
            <img src={muiLogo} alt="HTML Logo" className={`${classes.aboutImg}`}/>
          </Grid>

          <Grid 
            size={{
              mobile: 12,
              table: 12,
              laptop: 12
            }}
            sx={{
              textAlign: "center",
              backgroundColor: "var(--grey)",
              borderRadius: "5px"
            }}
          >
            <h1 className={`${classes.aboutH1}`}>Background</h1>
            <p className={`${classes.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
            enim architecto minima quisquam, quibusdam doloremque omnis incidunt
            alias velit rerum, quae minus, magni quia nihil quos? Neque voluptatum
            reiciendis eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam odio reprehenderit? Repellat voluptate sunt praesentium
            consequuntur officia fuga delectus dolor deleniti libero amet, ipsum
            ratione quo id accusamus rerum. 
          </p>
          </Grid>

      </Grid>
    </ThemeProvider>
    </>
  );
}

export default About;
