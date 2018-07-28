import React, {Component} from 'react';
import "./TechLogo.css";

export default ({logo}) => {
    return (
        <div className="tech-logo col-6 col-md-3 col-lg-2">
            <img src={logo}/>
        </div>
    );
};
