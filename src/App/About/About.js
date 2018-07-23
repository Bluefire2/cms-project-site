import React, {Component} from 'react';
import UseCase from "./UseCase";

export default () => {
    return (
        <div id="about" className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div className="col-12 col-lg-8 mx-auto">
                <h4 className="display-4 font-weight-bold">ABOUT</h4>
                <p>what <i>is</i> CMS?</p>
            </div>
            <p className="lead font-weight-normal">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</p>

            <div className="row">
                <UseCase title="Students" text="[example of student use case]" theme="dark"/>
                <UseCase title="Course staff" text="[example of course staff use case]" theme="light"/>
            </div>
        </div>
    );
}