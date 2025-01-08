import Header from './components/header-comp/header-comp.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/footer-comp/footer-comp.jsx';
import About from './pages/about-page/about-page.jsx';
import Portfolio from './pages/dev-portfolio-page/dev-portfolio.jsx';
import Contact from './pages/contact-page/contact-page.jsx';
import Resume from './pages/resume-page/resume-page.jsx';
import Error from './pages/error-page/error-page.jsx';
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
                {/* <Outlet /> */}
                <About />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </>
    );
}

export default App;