// Import React Hooks
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Import CSS Hooks
import classes from "../dev-portfolio-page/dev-portfolio.module.css";

// Import MUI Material Hooks
import Grid from '@mui/material/Grid2';

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
                <h1 className={`${classes.portfolioH1}`}>Portfolio</h1>

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

            </ThemeProvider>
        </>
    )
}

export default Portfolio;
