function Header() {

    const headerStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid black',
        textAlign: 'center'
    }

    return (
        <div>
            <header style={headerStyle}>
                Hayden Fitzpatrick-Brintle
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;