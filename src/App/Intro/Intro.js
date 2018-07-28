import React, {Component} from 'react';
import "./Intro.css";

export default () => {
    return (
        <div id="intro" className="parallax-scroll position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
            <div className="col-12 col-lg-8 p-lg-5 mx-auto my-5">
                <h1 id="cms-header" className="display-4 font-weight-bold">Cornell Course Management System</h1>
                <p className="lead font-weight-normal">lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <a className="btn btn-outline-secondary" href="https://cmsx.cs.cornell.edu/web/guest/">See for
                    yourself!</a>
            </div>
            <div className="product-device box-shadow d-none d-md-block"></div>
            <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
    );
};