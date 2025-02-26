// Import CSS Hooks
import classes from "../dev-portfolio-page/dev-portfolio.module.css";

// Import MUI Material Hooks
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Component Hooks
import ProjectCard from "../../components/Project-Card/Project-Card.jsx";
import projectFiles from "../../utils/project-files.json";

function Portfolio() {

    // Creating the variable to hold the viewports for the returns
    const isMobile = useMediaQuery(`(max-width: 435px)`)

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
        <div id='projects'>
            {/* Using the themeprovider hook to create breakpoints */}
            <ThemeProvider
                theme={createTheme({
                    breakpoints: {
                        values: {
                        mobile: 0,
                        tablet: 436,
                        laptop: 768
                        }
                    }
                })}
            >
                {/* Overall grid */}
                <Grid 
                    container 
                    direction="row"
                    spacing={2}
                    aligns="center"
                    sx={{
                        marginTop: "5rem",
                    }}
                >

                    {/* Conditional rendering for the Projects in mobile view */}
                    {isMobile === true ? (

                        <Grid
                            display='flex'
                            flexDirection='column'
                            alignItems='center'  
                            justifyContent='center'
                            size={{ 
                                mobile: 12
                            }}
                        >
                            <h1 className={`${classes.portfolioH1}`}>PROJECTS</h1>
                        </Grid>

                    ) : (
                        // Conditional rendering for the projects in tablet and laptop view
                        <Grid
                            display='flex'
                            flexDirection='column'
                            alignItems='center'  
                            justifyContent='center'
                            size={{ 
                                mobile: 1, 
                                tablet: 1, 
                                laptop: 1 
                            }}
                        >
                            <h1 className={`${classes.portfolioH1}`}>
                                P<br/>
                                R<br/>
                                O<br/>
                                J<br/>
                                E<br/>
                                C<br/>
                                T<br/>
                                S</h1>
                        </Grid>

                    )}
    
                    {/* Project map */}  
                    <Grid
                        display='flex'
                        flexDirection='row'
                        alignItems='center' 
                        justifyContent='center' 
                        size={{ 
                            mobile: 12, 
                            tablet: 11, 
                            laptop: 11 
                        }}
                    >
                        <Grid 
                            container 
                            direction="row"
                            spacing={2}
                            aligns="center"
                            justifyContent="center"
                        >
                            {projectFiles.map(project => (
                                    <ProjectCard project={project} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Portfolio;
