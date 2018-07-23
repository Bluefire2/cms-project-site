import React from 'react';

export default ({title, text, theme}) => {
    let bgClass, antiBgClass, textColorClass;
    switch (theme) {
        case "light":
            bgClass = "bg-light";
            antiBgClass = "bg-dark";
            textColorClass = "";
            break;
        case "dark":
        default:
            bgClass = "bg-dark";
            antiBgClass = "bg-light";
            textColorClass = "text-white";
            break;
    }
    return (
        <div
            className={`col-sm ${bgClass} mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ${textColorClass} overflow-hidden`}>
            <div className="my-3 py-3">
                <h2 className="display-5">{title}</h2>
                <p className="lead">{text}</p>
            </div>
            <div className={`${antiBgClass} box-shadow mx-auto`}
                 style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}/>
        </div>
    );
};