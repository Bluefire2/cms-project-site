import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Teams from "./Teams";
import portraitPlaceholder from "../img/portrait-placeholder.png";

const teams = [{
    name: "frontend",
    subheading: "\"If your website doesn't look good, how do you expect to look good? --Bill Gates, 1997\"",
    members: [
        {
            name: "John Doe",
            role: "Team Lead",
            portrait: portraitPlaceholder,
            github: "https://github.coecis.cornell.edu/CMSX/cmsx",
            linkedin: "https://www.linkedin.com/company/john-doe/"
        },
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
    ]
}, {
    name: "backend",
    subheading: "\"It's pronounced see-kwell. --Anonymous\"",
    members: [
        {
            name: "John Doe",
            role: "Team Lead",
            portrait: portraitPlaceholder,
            github: "https://github.coecis.cornell.edu/CMSX/cmsx",
            linkedin: "https://www.linkedin.com/company/john-doe/"
        },
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
        {name: "John Doe", role: "Team Lead", portrait: portraitPlaceholder},
    ]
}];


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Intro/>
                <About/>
                <Teams teams={teams}/>
            </div>
        );
    }
}

export default App;
