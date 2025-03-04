import React, { useState, useEffect } from 'react';
import classes from "../scrollTo-comp/scrollTo.module.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    isVisible && (
        <button onClick={scrollToTop}
        style={{
        position: 'fixed',
        width: '50px',
        height: '50px',
        bottom: '25px',
        right: '25px',
        zIndex: '100',
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        border: 'none',
        borderRadius: '5px'
        }}
        >
        <KeyboardDoubleArrowUpIcon fontSize='large' />
        </button>
    )
    );
}

export default ScrollToTopButton;