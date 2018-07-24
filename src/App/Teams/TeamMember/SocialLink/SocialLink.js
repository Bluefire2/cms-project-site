import React from "react";
import "./SocialLink.css";

export default ({service, link}) => {
    return (
        <div className="social-link">
            <a href={link}>
                <i className={`fab fa-${service} fa-2x`}></i>
            </a>
        </div>
    );
};