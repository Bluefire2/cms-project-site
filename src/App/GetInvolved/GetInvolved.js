import React, {Component} from 'react';
import TechLogo from "./TechLogo";
import java from "../../img/tech-logos/java.svg";
import html from "../../img/tech-logos/html5.svg";
import js from "../../img/tech-logos/js.svg";
import db from "../../img/tech-logos/db.png";
import "./GetInvolved.css";

const techLogos = [java, html, js, db];

class GetInvolved extends Component {
    render() {
        return (
            <div id="get-involved"
                 className="parallax-scroll anchor-offset-section position-relative overflow-hidden p-3 p-md-5 text-center bg-dark text-light">
                <div className="col-12 col-lg-8 p-lg-5 mx-auto">
                    <h1 id="gi-header">Want to get involved?</h1>
                    <h6>CMS is a big project and there is always work to be done!</h6>
                </div>
                <div className="row py-5">
                    {techLogos.map((logo, i) => <TechLogo logo={logo} key={i}/>)}
                </div>
                <h6>Above ^ list the tech stack, basically write something about how we need people with a wide range of skills</h6>
            </div>
        );
    }
}

export default GetInvolved;