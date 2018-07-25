import React from 'react';
import "./NavbarItemWithDropdown.css";

export default ({children, to, active, items}) => {
    return (
        <li className={`nav-item dropdown ${active ? "active" : ""}`}>
            <a className="nav-link dropdown-toggle" href={to}
               aria-haspopup="true" aria-expanded="false">{children}</a>
            <div className="dropdown-menu">
                {items.map(([to, text]) => {
                    return <a className="dropdown-item" key={text} href={to}>{text}</a>;
                })}
            </div>
        </li>
    );
};