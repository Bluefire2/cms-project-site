import React, {Component} from 'react';
import "./TeamMember.css";

export default ({portrait, name, role}) => {
    // TODO: set github/linkedin/etc icons and links via props
    return (
        <div className="col-12 col-md-4 p-2 p-md-3 p-lg-4">
            <div className="team-member p-3">
                <div className="row">
                    <div className="col-6">
                        <img className="portrait" src={portrait}/>
                    </div>
                    <div className="col-6">
                        <h4>{name}</h4>
                        <h6>{role}</h6>
                        <i className="fab fa-github fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}