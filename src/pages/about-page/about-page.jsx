// Import React Hooks
import * as React from 'react';
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
import htmlLogo from "../../assets/htmlLogo2.png";
import cssLogo from "../../assets/cssLogo.png";
import jsLogo from "../../assets/jsLogo.webp";
import tsLogo from "../../assets/tsLogo.png";
import reactLogo from "../../assets/reactLogo.webp";
import nodejsLogo from "../../assets/nodejsLogo.png";
import gitLogo from "../../assets/gitLogo.png";
import muiLogo from "../../assets/muiLogo.png";
import uziLogo from "../../assets/profilePic.jpg"

// Import Icons
import { FaPython } from "react-icons/fa";

// Import Components
import Skills from "../../components/skills-comp/skills-comp";
import skillsFiles from "../../utils/skill-files.json";

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
        palette: {
          primary: {
              main: "#32CD32",
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
              <p className={`${classes.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi recusandae! Odit ipsa ab molestiae, dolor et eveniet. Ratione tempore reiciendis ut quos inventore esse voluptatibus. Assumenda quos molestias unde?</p>
              <Button variant='contained' color='primary' sx={{
                marginTop: "10px",
                width: "100%"
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
              <p className={`${classes.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi recusandae! Odit ipsa ab molestiae, dolor et eveniet. Ratione tempore reiciendis ut quos inventore esse voluptatibus. Assumenda quos molestias unde?</p>
              <Button variant='contained' color='primary' sx={{
                marginTop: "10px",
                width: "100%"
              }}>Let's Connect!</Button>
            </Grid>
          </>
        )}
        {/* <Grid
          display='flex'
          flexDirection='column'
          alignItems='start'  
          size={{ 
            mobile: 12, 
            tablet: 6, 
            laptop: 6 
          }}
          sx={{
            paddingRight: "50px"
          }}
        >
          <h1 className={`${classes.nameH1}`}>Hayden Fitzpatrick-Brintle</h1>
          <h2 className={`${classes.webDevH1}`}>Fullstack Developer</h2>
          <p className={`${classes.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi recusandae! Odit ipsa ab molestiae, dolor et eveniet. Ratione tempore reiciendis ut quos inventore esse voluptatibus. Assumenda quos molestias unde?</p>
          <Button variant='contained' color='primary' sx={{
            marginTop: "10px",
            width: "100%"
          }}>Let's Connect!</Button>
        </Grid> */}

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
            I am a dedicated full-stack software developer and skilled photographer/videographer with a passion for creating seamless digital experiences and capturing visual stories. I bring a comprehensive skill set in web and app development, paired with technical expertise in photography and videography, ensuring every project meets high standards of quality and creativity. My work is backed by a strong foundation of hands-on experience, attention to detail, and a commitment to delivering impactful results.
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
            I bring a blend of efficiency, creativity, attention to detail, and determination to every project I take on. As a full-stack software developer, I am proficient in languages including, but not limited to, HTML, CSS, JavaScript, and React, allowing me to craft responsive and intuitive user experiences. My approach is driven by a commitment to problem-solving and optimizing processes for seamless functionality. In photography and videography, I apply these skills through a keen eye for detail, creative vision, and precise editing, coupled with strong communication abilities to bring concepts to life visually and effectively.
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
            I hold a bachelor’s degree in psychology with an emphasis in sports performance from Grand Canyon University, paired with two years of experience as a 2x certified personal trainer. This background has given me a unique perspective on motivation, discipline, and performance. Alongside my professional experience in photography and videography, I am soon to be certified in software development, expanding my skill set to include dynamic digital solutions across visual and technical fields.
          </p>
          </Grid>

      </Grid> */}

      <Grid
        container 
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
        }}  
      >
        <Grid
          sx={{
            backgroundColor: "var(--accent-color)",
          }}
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 6
          }}
        >
          {skillsFiles.map(skill => (
            <Skills skill={skill} />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}

export default About;
