import classes from "../styles/main.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <h1 className={`${classes.headerH1}`}>Hayden Fitzpatrick-Brintle</h1>
        <nav className={`${classes.headerNav}`}>
          <ul className={`${classes.headerUl}`}>
            <li className={`${classes.headerLi}`}>
                <Link to="/" className={`${classes.headerButton}`}>
              <button className={`${classes.headerButton}`}>About Me</button>
                </Link>
            </li>
            <li className={`${classes.headerLi}`}>
                <Link to="/Portfolio" className={`${classes.headerButton}`}>
              <button className={`${classes.headerButton}`}>Portfolio</button>
                </Link>
            </li>
            <li className={`${classes.headerLi}`}>
                <Link to="/Contact" className={`${classes.headerButton}`}>
              <button className={`${classes.headerButton}`}>Contact Me</button>
                </Link>
            </li>
            <li className={`${classes.headerLi}`}>
                <Link to="/Resume" className={`${classes.headerButton}`}>
              <button className={`${classes.headerButton}`}>Resume</button>
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
