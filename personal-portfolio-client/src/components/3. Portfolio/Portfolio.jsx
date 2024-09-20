import classes from "../3. Portfolio/portfolio.module.css";
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import uziLogo from "../../assets/uzime.jpg"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../Project-Card/Project-Card.jsx";
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
