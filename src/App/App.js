import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "@fortawesome/fontawesome-free/css/all.css";
import portraitPlaceholder from "../img/portrait-placeholder.png";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Intro/>
                <About/>

                <div id="teams" className="position-relative overflow-hidden p-3 p-md-5 text-center">
                    <div id="team-frontend" className="row">
                        <div className="team-member col-12 col-md-4 p-3">
                            <div className="row">
                                <div className="col-6">
                                    <img className="portrait" src={portraitPlaceholder}/>
                                </div>
                                <div className="col-6">
                                    <h4>John Doe</h4>
                                    <h6>Team Lead</h6>
                                    <a className="btn btn-social-icon btn-twitter">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="team-backend" className="row"></div>
                    <div id="team-qa" className="row"></div>
                </div>
            </div>
        );
    }
}

export default App;
