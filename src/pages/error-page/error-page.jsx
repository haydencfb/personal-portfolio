import classes from "../error-page/error.module.css";

function Error() {
    return (
        <div className={`${classes.div}`}>
            <h1 className={`${classes.aboutH1}`}>Error</h1>
            <p className={`${classes.aboutP}`}>404 Page Not Found</p>
        </div>
    )
}

export default Error;