import { useState } from 'react';
// import './styles/About.css';

function About() {

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '20px'
    }

    return (
        <div>
            <button style={buttonStyle}>About</button>
        </div>
    );
}

export default About;