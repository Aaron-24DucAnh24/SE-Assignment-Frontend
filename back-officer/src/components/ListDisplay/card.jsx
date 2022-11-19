import React from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";

export const Card = (prop) => {
    const showDetail = () => {
        console.log("Show detail")
    }


    return (<div className="cardBox" OnClick={showDetail}>
        <div className="cardName">
            {prop.name}
        </div>

        <div className="cardStatus">
            {prop.status}
        </div>

        <img src={infoIcon} className="icon"></img>


    </div>);
};