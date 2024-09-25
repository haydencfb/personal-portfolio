import * as projects from "../../assets/index.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";
import classes from "../3. Portfolio/portfolio.module.css";
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
                alignItems: "stretch"
            }}
        >
            <Card sx={{ 
                width: 500,
                height: "100%",
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
                    <CardContent className={`${classes.portfolioCard}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                    </CardContent>
                    </a>
                </CardActionArea>
            <CardActions className={`${classes.portfolioCard}`}>
                <Link to={github} size="small" color="primary" className={`${classes.portfolioLink}`}>
                    GitHub Repo
                </Link>
            </CardActions>
        </Card>
    </Grid>
    )
}