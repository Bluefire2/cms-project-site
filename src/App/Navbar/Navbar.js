import React, {Component} from 'react';
import "./Navbar.css";
import cornellLogoReduced from "../../img/cornell-reduced.png";
import NavbarItem from "./NavbarItem";
import NavbarItemWithDropdown from "./NavbarItemWithDropdown";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false
        }
    }

    toggleNavbar() {
        this.setState({
            navbarOpen: !this.state.navbarOpen
        });
    }

    render() {
        // TODO: make the links work
        // note that this will need to involve offsetting the page location to make space for the navbar
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-cms-primary">
                <a className="navbar-brand mx-auto mx-lg-0" href="#">
                    <div id="brand-container">
                        <img src={cornellLogoReduced} id="logo-image" className="mr-2 mr-md-3"/> Cornell CMS
                    </div>
                </a>
                <button className="navbar-toggler p-0 border-0" type="button" onClick={this.toggleNavbar.bind(this)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse offcanvas-collapse ${this.state.navbarOpen ? "open" : ""}`} id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <NavbarItem active={true} to={"#"}>About</NavbarItem>
                        <NavbarItemWithDropdown
                            to={"#"}
                            items={[
                                ["#", "Frontend"],
                                ["#", "Backend"],
                                ["#", "QA"]
                            ]}>Meet the Team</NavbarItemWithDropdown>
                        <NavbarItem to={"#"}>Get Involved</NavbarItem>
                        <NavbarItem to={"#"}>Contact Us</NavbarItem>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
