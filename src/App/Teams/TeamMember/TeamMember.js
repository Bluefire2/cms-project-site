import React, {Component} from 'react';
import "./TeamMember.css";
import SocialLink from "./SocialLink";

export default ({portrait, name, role, github, linkedin}) => {
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
                        <ul className="list-inline my-0">
                            {typeof github !== "undefined" &&
                            <li className="list-inline-item"><SocialLink service="github" link={github}/></li>}
                            {typeof linkedin !== "undefined" &&
                            <li className="list-inline-item"><SocialLink service="linkedin" link={linkedin}/></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}