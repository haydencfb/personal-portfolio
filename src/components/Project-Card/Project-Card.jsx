import * as projects from "../../assets/index.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";
import classes from "../../pages/dev-portfolio-page/dev-portfolio.module.css";
import Grid from '@mui/material/Grid2';


export default function ProjectCard ({ project }) {

    const { name, description, deployed, github, image } = project;

    return (
        <Grid
            key={
                name
            }
            size={{ 
            mobile: 12,
            tablet: 6,
            laptop: 4
            }}
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Card 
                sx={{ 
                    width: 500,
                    backgroundColor: "var(--grey)"
                }}
            >
                <CardActionArea>
                <a href={deployed} className={`${classes.portfolioLink}`}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={projects[image]}
                    alt={name}
                    />
                    <CardContent
                    sx={{
                        height: "100%",
                    }}>
                    <CardActions className={`${classes.portfolioCard}`}>
                        <Link to={github} size="small" color="primary" className={`${classes.portfolioLink}`}>
                            {name}
                        </Link>
                    </CardActions>
                    </CardContent>
                    </a>
                </CardActionArea>
        </Card>
        </Grid>
    )
}