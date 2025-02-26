import classes from './skill-comp.module.css';
import Grid from '@mui/material/Grid2';
import * as skills from "../../assets/skills.js";


export default function Skills({ skill }) {

    const { skillName, skillImg } = skill;

    return (
        <Grid
            size={{
                mobile: 6,
                tablet: 4,
                laptop: 2
            }}
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <p className={`${classes.skillName}`}>{skillName}</p>
        </Grid>
    );
}