function Header() {

    const headerStyle = {
        fontSize: '40px',
        fontFamily: 'ui-monospace, Menlo, Monaco, Cascadia Mono, Segoe UI Mono, Roboto Mono, Oxygen Mono, Ubuntu Monospace, Source Code Pro, Fira Mono, Droid Sans Mono, Courier New, monospace',
        color: 'white',
        display: 'flex',
    }

    const navStyle = {
        display: 'flex',
        flexFlow: 'wrap'
    }

    return (
        <div>
            <header style={headerStyle}>
                Hayden Fitzpatrick-Brintle
            </header>
            <nav style={navStyle}>
                <ul>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;