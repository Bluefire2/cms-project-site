import React from 'react';

export default ({children, to, active}) => {
    return (
        <li className={`nav-item ${active ? "active" : ""}`}>
            <a className="nav-link" href={to}>{children}</a>
        </li>
    );
};