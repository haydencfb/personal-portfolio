import Header from './components/header-comp/header-comp.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/footer-comp/footer-comp.jsx';

import "./app.css";


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