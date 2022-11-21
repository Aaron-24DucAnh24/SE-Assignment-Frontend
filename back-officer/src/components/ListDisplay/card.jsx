import React from "react";
import "./ListDisplay.css";
import infoIcon from "./img/infoIcon.png";

export const Card = ({cardProp}) => {

    // TODO Tuan
    const ShowDetail = () =>{
        console.log("DetailInfo handle " + cardProp.name);
    }

    return (<button className="cardBox" onClick={ShowDetail}>
        <div className="cardName">
            {cardProp.name}
        </div>

        <div className="cardStatus">
            {cardProp.status == true ? <span id="online">Online</span> : "Offline"}
        </div>

        <img src={infoIcon} className="icon"></img>


    </button>);
};

