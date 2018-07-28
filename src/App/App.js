import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Teams from "./Teams";
import GetInvolved from "./GetInvolved";
import {teams} from "../constants";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Intro/>
                <About/>
                <Teams teams={teams}/>
                <GetInvolved/>
            </div>
        );
    }
}

export default App;
