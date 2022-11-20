import React from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";

export const Card = ({cardProp}) => {
    const showDetail = () => {
        console.log("Show detail")
    }


    return (<div className="cardBox" OnClick={showDetail}>
        <div className="cardName">
            {cardProp.name}
        </div>

        <div className="cardStatus">
            {cardProp.status == true ? <span id="online">Online</span> : "Offline"}
        </div>

        <img src={infoIcon} className="icon"></img>


    </div>);
};

