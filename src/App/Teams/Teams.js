import React, {Component} from 'react';
import TeamMember from "./TeamMember";
import "./Teams.css";

export default ({teams}) => {
    // TODO: style the team containers and the subheadings inside
    return (
        <div id="teams" className="position-relative overflow-hidden p-3 p-md-5 text-center">
            {teams.map(({name, members}, i) => {
                // since the app is static, we can use the index for the key
                // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
                return <div id={`team-${name}`} key={i}>
                    <h1>{name.toUpperCase()}</h1>
                    <div className="row p-2 p-md-0">
                        {members.map((member, j) => {
                            // ditto
                            return <TeamMember {...member} key={j}/>;
                        })}
                    </div>
                </div>
            })}
        </div>
    );
}