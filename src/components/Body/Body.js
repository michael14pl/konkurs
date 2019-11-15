import React from 'react';
import './Body.scss';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Passion from './Passion';


function Body() {
    return (
        <div className="body">
            <AboutMe />
            <Experience />
            <Passion />
        </div>
    );
}

export default Body;