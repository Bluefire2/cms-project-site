import React from "react";
import "./SocialLink.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default ({service, link, brand = false}) => {
    return (
        <div className="social-link">
            <a href={link}>
                {brand ? <i className={`fab fa-${service} fa-2x`}></i> : <i className={`fas fa-${service} fa-2x`}></i>}
            </a>
        </div>
    );
};