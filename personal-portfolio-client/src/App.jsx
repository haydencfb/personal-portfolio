import Header from './components/1. Header/Header.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/6. Footer/Footer.jsx';

import classes from "../src/components/app.module.css"


function App() {

    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            default:
            document.title = 'Home';
            break;

            case '/Portfolio':
            document.title = 'Portfolio';
            break;

            case '/Resume':
            document.title = 'Resume';
            break;

            case '/Contact':
            document.title = 'Contact';
            break;
        }
        }, [location]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;