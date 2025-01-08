// Import CSS Hooks
import classes from "../dev-portfolio-page/dev-portfolio.module.css";

// Import MUI Material Hooks
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Import Component Hooks
import ProjectCard from "../../components/Project-Card/Project-Card.jsx";
import projectFiles from "../../utils/project-files.json";


function Portfolio() {

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
                <Grid 
                    container 
                    direction="row"
                    spacing={2}
                    aligns="center"
                    sx={{
                        marginTop: "5rem",
                    }}
                >
                    <Grid
                        display='flex'
                        flexDirection='column'
                        alignItems='start'  
                        justifyContent='center'
                        size={{ 
                            mobile: 1, 
                            tablet: 1, 
                            laptop: 1 
                        }}
                    >
                        <h1 className={`${classes.portfolioH1}`}>
                            P<br/>
                            r<br/>
                            o<br/>
                            j<br/>
                            e<br/>
                            c<br/>
                            t<br/>
                            s</h1>
                    </Grid>

                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='start'  
                        size={{ 
                            mobile: 11, 
                            tablet: 11, 
                            laptop: 11 
                        }}
                    >
                        <Grid 
                            container 
                            direction="row"
                            spacing={2}
                            aligns="center"
                        >
                            {projectFiles.map(project => (
                                    <ProjectCard project={project} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Portfolio;
