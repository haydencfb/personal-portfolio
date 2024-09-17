import classes from "../3. Portfolio/portfolio.module.css";
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import uziLogo from "../../assets/uzime.jpg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link, useLocation } from "react-router-dom";


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

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Employee Database
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus enim voluptatibus, voluptatem omnis non, eos adipisci reiciendis illo fuga hic dolorem quod laboriosam aut voluptate ex. Nam quidem possimus porro.
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Weather Dashboard
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi velit culpa rerum nesciunt, sit iste inventore nobis quam exercitationem aliquid esse officia beatae dicta est itaque rem nihil excepturi eaque?
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Vehicle Builder
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nulla fuga dignissimos aliquid similique! Dignissimos consequuntur placeat necessitatibus porro praesentium totam mollitia, culpa, eum blanditiis quia a ut. Molestias, cumque.
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Solid Dollop Card Game
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem numquam, harum quo temporibus, doloribus autem magnam facilis ea et alias molestias dolorum dolores explicabo maxime. Mollitia quidem dolorem unde.
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        README Generator
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo? Sapiente non praesentium autem qui delectus consequatur nihil corrupti itaque reiciendis, totam debitis quos ipsum adipisci error iure aliquid vero.
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid  
                        size={{ 
                        mobile: 12,
                        tablet: 6,
                        laptop: 4
                        }}
                    >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <a href="https://github.com/haydencfb/employee-database" className={`${classes.portfolioLink}`}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uziLogo}
                                    alt="uzi logo"
                                    />
                                    <CardContent className={`${classes.portfolioCard}`}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Portfolio
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis delectus ex beatae praesentium eum odio, ad voluptates doloremque vel harum nisi necessitatibus, accusantium temporibus fuga, magnam voluptate enim. Pariatur.
                                    </Typography>
                                    </CardContent>
                                    </a>
                                </CardActionArea>
                            <CardActions className={`${classes.portfolioCard}`}>
                                <Link to="https://github.com/haydencfb/employee-database" size="small" color="primary" className={`${classes.portfolioLink}`}>
                                    GitHub Repo
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

            </ThemeProvider>
        </>
    )
}

export default Portfolio;