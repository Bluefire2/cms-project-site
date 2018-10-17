import React, {Component} from 'react';
import "./TeamMember.css";
import SocialLink from "./SocialLink";

export default ({portrait, name, role, github, linkedin, website}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 p-2 p-md-3 p-lg-4">
            <div className="team-member p-3">
                <div className="row">
                    <div className="col-6">
                        <img className="portrait" src={portrait}/>
                    </div>
                    <div className="col-6">
                        <h4>{name}</h4>
                        <h6>{role}</h6>
                        <ul className="list-inline my-2">
                            {typeof github !== "undefined" &&
                            <li className="list-inline-item"><SocialLink service="github" link={github} brand={true}/></li>}
                            {typeof linkedin !== "undefined" &&
                            <li className="list-inline-item"><SocialLink service="linkedin" link={linkedin} brand={true}/></li>}
                            {typeof website !== "undefined" &&
                            <li className="list-inline-item"><SocialLink service="globe-americas" link={website}/></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}