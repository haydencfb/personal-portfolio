import classes from '../styles/Header.module.css';

function Header() {

    return (
        <div>
            <header>
                <h1 className={`${classes.headerH1}`}>Hayden Fitzpatrick-Brintle</h1>
                <nav className={`${classes.headerNav}`}>
                    <ul className={`${classes.headerUl}`}>
                        <li className={`${classes.headerLi}`}><button className={`${classes.headerButton}`}>About Me</button></li>
                        <li className={`${classes.headerLi}`}><button className={`${classes.headerButton}`}>Portfolio</button></li>
                        <li className={`${classes.headerLi}`}><button className={`${classes.headerButton}`}>Contact Me</button></li>
                        <li className={`${classes.headerLi}`}><button className={`${classes.headerButton}`}>Resume</button></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;